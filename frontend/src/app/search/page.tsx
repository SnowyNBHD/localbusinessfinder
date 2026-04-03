import styles from "./page.module.css";
import Page from "../components/Page";
import BusinessCard from "../components/BusinessCard";

type ApiBusiness = {
  id: string;
  name: string;
  type: string;
  description: string;
  rating: number;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

async function fetchBusinessesByQuery(q: string): Promise<ApiBusiness[]> {
  const res = await fetch(`${API_BASE_URL}/api/business?q=${encodeURIComponent(q)}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch search results: ${res.status}`);
  }
  return (await res.json()) as ApiBusiness[];
}

export const dynamic = "force-dynamic";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const q = params.q?.trim();

  let businesses: ApiBusiness[] = [];
  if (q) {
    try {
      businesses = await fetchBusinessesByQuery(q);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Page styles={styles}>
      <section>
        {q ? <h1>Results for "{q}"</h1> : <h1>Type something to search</h1>}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          {businesses.map((b) => (
            <BusinessCard
              key={b.id}
              url={`/business/${b.id}`}
              name={b.name}
              type={b.type}
              description={b.description}
              rating={b.rating}
            />
          ))}
        </div>
      </section>
    </Page>
  );
}
