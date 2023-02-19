import "@/styles/reset.scss";
import "@/styles/base.scss";
import "@/styles/add.scss"; // TODO: 追加CSSを一旦add.scssにまとめているが今後分解する予定

import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";

import Bugsnag from "@/lib/common/bugsnag";

export type NextPageWithLayout<P = Record<never, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const getErrorBoundaryContainer = (page: ReactElement) => {
  // bugsnag関連（初期化等に失敗した場合は undefined になる
  const ErrorBoundary = Bugsnag.getPlugin("react");

  if (ErrorBoundary === undefined) return page;

  const ErrorBoundaryContainer = ErrorBoundary.createErrorBoundary(React);
  return <ErrorBoundaryContainer>{page}</ErrorBoundaryContainer>;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout): ReactNode => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getErrorBoundaryContainer(
    <>{getLayout(<Component {...pageProps} />)}</>
  );
};

export default MyApp;
