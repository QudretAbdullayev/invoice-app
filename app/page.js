import Filter from "@/components/Filter/Filter";
import styles from "./page.module.scss";
import Nothing from "@/components/Nothing/Nothing";
import Cards from "@/components/Cards/Cards";
import GoBack from "@/components/GoBack/GoBack";

export default function Home() {
  return (
    <>
    <main className={styles.page}>
      <GoBack/>
      {/* <Filter/>
      <Nothing/> */}
      {/* <Cards/> */}
    </main>
    </>
  );
}
