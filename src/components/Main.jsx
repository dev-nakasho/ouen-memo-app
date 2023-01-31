import { Header } from "./Header";
import { MainContents } from "./MainContents";
import { Footer } from "./Footer";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <MainContents />
      <Footer />
    </div>
  );
};
