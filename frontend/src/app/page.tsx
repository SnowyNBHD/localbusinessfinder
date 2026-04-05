import styles from "./page.module.css";
import BusinessCard from "./components/BusinessCard";

type ApiBusiness = {
  id: string;
  name: string;
  type: string;
  description: string;
  rating: number;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

async function fetchFeaturedBusinesses(): Promise<ApiBusiness[]> {
  const res = await fetch(`${API_BASE_URL}/api/business?featured=true`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch businesses: ${res.status}`);
  }

  return (await res.json()) as ApiBusiness[];
}

export const dynamic = "force-dynamic";

export default async function Home() {
  let businesses: ApiBusiness[] = [];
  try {
    businesses = await fetchFeaturedBusinesses();
  } catch (e) {
    console.error(e);
  }

  return (
    <>
      <section id="hero" className={styles.hero}></section>
        
        <div className={styles.navBackdrop}>Featured Businesses:</div>

        <section className={styles.featured}>
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
        </section>
    </>
  );
}
