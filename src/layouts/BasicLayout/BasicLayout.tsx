import { ReactElement } from "react";

export const BasicLayout = (page: ReactElement): JSX.Element => {
  return (
    <div className="basic-layout-global">
      <div className="page">{page}</div>
    </div>
  );
};
