import Filter from "@/components/Filter/Filter";
import styles from "./page.module.scss";
import Nothing from "@/components/Nothing/Nothing";
import Cards from "@/components/Cards/Cards";
import GoBack from "@/components/GoBack/GoBack";
import Status from "@/components/ViewInvoice/Status/Status";
import Buttons from "@/components/ViewInvoice/Buttons/Buttons";
import Detail from "@/components/ViewInvoice/Detail/Detail";
import CreateEdit from "@/components/CreateEdit/CreateEdit";

export default function Home() {
  return (
    <>
    <main className={styles.page}>
      <Filter/>
      <Nothing/>
      {/* <Cards/> */}
    </main>
    {/* <main className={styles.viewPage}>
      <GoBack/>
      <Status/>
      <Detail/>
      <Buttons/>
    </main> */}
    {/* <main className={styles.editPage}>
        <GoBack/>
        <CreateEdit/>
    </main> */}
    </>
  );
}
