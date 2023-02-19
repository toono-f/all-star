---
to: src/components/<%= category %>/<%= componentName %>/<%= componentName %>.tsx
---
import styles from "./<%= componentName %>.module.scss";

type Props = {
  name: string;
}

export const <%= componentName %> = ({ name }: Props) => {
  return <div className={styles["<%= h.changeCase.param(componentName) %>"]}></div>;
};
