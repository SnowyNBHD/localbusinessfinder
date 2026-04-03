import { notFound } from "next/navigation";

import styles from "../../page.module.css";
import Page from "../../components/Page";
import Rating from "../../components/Rating";

type ApiBusinessDetail = {
  id: string;
  name: string;
  type: string;
  description: string;
  rating: number;
  featured: boolean;
  reviews: Array<{
    id: string;
    content: string;
    score: number;
    uploader: string;
  }>;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

export const dynamic = "force-dynamic";

export default async function BusinessDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const routeParams = await params;
  const id = routeParams.id;

  const res = await fetch(`${API_BASE_URL}/api/business/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error(`Failed to load business ${id}`);

  const data = (await res.json()) as ApiBusinessDetail;

  return (
    <Page styles={styles}>
      <section style={{ padding: 16 }}>
        <h1>{data.name}</h1>
        <p style={{ opacity: 0.9 }}>{data.type}</p>
        <Rating rating={data.rating} />

        <p style={{ marginTop: 12 }}>{data.description}</p>

        <h2 style={{ marginTop: 24 }}>Reviews</h2>
        {data.reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {data.reviews.map((r) => (
              <li key={r.id} style={{ marginBottom: 16 }}>
                <strong>Score:</strong> {r.score}
                <p>{r.content}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Page>
  );
}

