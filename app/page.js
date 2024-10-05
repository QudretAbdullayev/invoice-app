import Filter from "@/components/Filter/Filter";
import styles from "./page.module.scss";
import Nothing from "@/components/Nothing/Nothing";

export default function Home() {
  return (
    <main className={styles.page}>
      <Filter/>
      <Nothing/>
    </main>
  );
}
