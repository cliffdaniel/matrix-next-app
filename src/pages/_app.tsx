import "../styles/global.css";
import { AppProps } from "next/app";
import { HeaderContainer } from "../components/HeaderContainer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <HeaderContainer />
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
