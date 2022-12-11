import { Header } from "./Header";
import { Contents } from "./Contents";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <div
      style={{
        //        display: "flex",
        //        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header />
      <Contents />
      <Footer />
    </div>
  );
};
