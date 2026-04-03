require("dotenv").config();

const express = require("express");
const { pool } = require("./db");

const app = express();

const PORT = Number(process.env.PORT);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

function parseOptionalBoolean(value) {
  if (value === undefined) return null;
  if (value === null) return null;
  const v = String(value).toLowerCase().trim();
  if (v === "true" || v === "1") return true;
  if (v === "false" || v === "0") return false;
  return null;
}

app.get("/api/business", async (req, res) => {
  const featured = parseOptionalBoolean(req.query.featured);
  const qRaw = req.query.q;
  const q = typeof qRaw === "string" && qRaw.trim().length > 0 ? qRaw.trim() : null;
  const limitRaw = req.query.limit;
  const limit = typeof limitRaw === "string" ? Math.max(1, Math.min(50, Number(limitRaw))) : 20;

  try {
    const { rows } = await pool.query(
      `
      SELECT
        id,
        name,
        type,
        description,
        avg_rating,
        featured
      FROM business
      WHERE
        ($1::boolean IS NULL OR featured = $1)
        AND (
          $2::text IS NULL OR
          name ILIKE '%' || $2 || '%'
          OR type ILIKE '%' || $2 || '%'
          OR description ILIKE '%' || $2 || '%'
        )
      ORDER BY featured DESC, avg_rating DESC
      LIMIT $3::int
      `,
      [featured, q, limit]
    );

    const businesses = rows.map((b) => ({
      id: b.id,
      name: b.name,
      type: b.type,
      description: b.description,
      rating: Number(b.avg_rating),
      featured: Boolean(b.featured),
    }));

    res.json(businesses);
  } catch (err) {
    console.error("GET /api/business failed:", err);
    res.status(500).json({ error: "Failed to fetch businesses" });
  }
});

app.get("/api/business/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const businessRes = await pool.query(
      `
      SELECT
        id,
        name,
        type,
        description,
        avg_rating,
        featured
      FROM business
      WHERE id = $1::varchar
      LIMIT 1
      `,
      [id]
    );

    if (businessRes.rows.length === 0) {
      return res.status(404).json({ error: "Business not found" });
    }

    const businessRow = businessRes.rows[0];

    const reviewsRes = await pool.query(
      `
      SELECT
        id,
        content,
        score,
        uploader
      FROM review
      WHERE business_id = $1::varchar
      ORDER BY score DESC
      `,
      [id]
    );

    res.json({
      id: businessRow.id,
      name: businessRow.name,
      type: businessRow.type,
      description: businessRow.description,
      rating: Number(businessRow.avg_rating),
      featured: Boolean(businessRow.featured),
      reviews: reviewsRes.rows.map((r) => ({
        id: r.id,
        content: r.content,
        score: Number(r.score),
        uploader: r.uploader,
      })),
    });
  } catch (err) {
    console.error("GET /api/business/:id failed:", err);
    res.status(500).json({ error: "Failed to fetch business" });
  }
});

app.listen(PORT, () => {
  console.log(`Express API listening on http://localhost:${PORT}`);
});

