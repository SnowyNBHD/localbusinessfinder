import Nav from "./Nav";

type PageProps = {
  styles: Record<string, string>
  children: React.ReactNode;
};

export default function Page(
    { styles, children}: PageProps) 
{
  return (
    <div className={styles.page + " page"}>
      <Nav />
      <section className={styles.main + " main"}>
        {children}
      </section>
      
      <div className={styles.verticalDivider}></div>

      <footer>Copyright © Never-Ever Welp Inc. Welp, Welp logo and related marks are NOT registered trademarks of Welp.</footer>
    </div>
  );
}