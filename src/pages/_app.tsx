import RootStoreProvider from "@components/common/StoreContext";
import config from "@config";
import { ThemeProvider } from "@emotion/react";
import axios from "@utils/axios.util";
import { AppContext, AppProps } from "next/app";
import { parseCookies, setCookie } from "nookies";
import theme from "../styles/theme";

interface IAppProps extends AppProps {
  member?: {
    name: string;
    level: number;
    mobile: string;
  };
}

const App = ({ Component, pageProps, member }: IAppProps) => {
  return (
    <RootStoreProvider member={member}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RootStoreProvider>
  );
};

App.getInitialProps = async ({ ctx }: AppContext) => {
  let member;
  // Server 의 경우
  if (config.isServer) {
    const { token } = parseCookies(ctx);
    // TOKEN
    if (token && token !== "NOT_TOKEN") {
      try {
        // Mock data
        const { data } = await axios.get("/api/mock/member", {
          headers: { authorization: `Bearer ${token}` },
        });
        member = data;
      } catch (e) {
        console.error(e);
      } // 에러무시
    }
    if (!member) {
      setCookie(ctx, "token", "NOT_TOKEN", {
        maxAge: 3 * 24 * 3600,
        path: "/",
        httpOnly: false,
        secure: false,
      });
    }
  }
  return { member };
};

export default App;
