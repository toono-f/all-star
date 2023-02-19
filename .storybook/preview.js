import "@/styles/reset.scss";
import "@/styles/base.scss";

// next imageに対応させるために設定
import * as nextImage from "next/image";

// next routerに対応させるために設定
import { RouterContext } from "next/dist/shared/lib/router-context";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
