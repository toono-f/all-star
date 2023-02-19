---
to: src/components/page/<%= h.changeCase.pascal(pagePath); %>/<%= h.changeCase.pascal(pagePath); %>.tsx
---
import styles from "./<%= h.changeCase.pascal(pagePath); %>.module.scss";

export const <%= h.changeCase.pascal(pagePath); %> = () => {
  return <div className={styles["<%= h.changeCase.param(pagePath) %>"]}></div>;
};
