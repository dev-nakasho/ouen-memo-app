import { Header } from "./Header";
import { MainContents } from "./MainContents";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header />
      <MainContents />
      <Footer />
    </div>
  );
};
