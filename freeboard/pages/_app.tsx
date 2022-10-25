import "antd/dist/antd.css";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/component/commons/layout";
import { GlobalStyle } from "../src/commons/style/globalStyle";
import ApolloSetting from "../src/component/commons/apollo/apolloSetting";
import { RecoilRoot } from "recoil";
import WhatViewPortSize from "../src/component/commons/responsive";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WhatViewPortSize>
      <RecoilRoot>
        <ApolloSetting>
          <Layout>
            <>
              <Global styles={GlobalStyle} />
              <Component {...pageProps} />
            </>
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </WhatViewPortSize>
  );
}

export default MyApp;
