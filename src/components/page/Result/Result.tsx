import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./Result.module.scss";

type SheetApiType = {
  values: Array<Array<string | number>>;
};

type ResultProps = {
  sheetNumber: number;
  answerNumber: number;
};

export const sheetId = "18DwsqC4ciKXvFOLARBBxh_VoCLDWSXV9grOq1GUuGek";
export const apiKey = "AIzaSyDV8GHEM2fB6Snn4-Y8rnsIvIW2X0lehwE";

export const Result = ({ sheetNumber, answerNumber }: ResultProps) => {
  const [data, setData] = useState<SheetApiType>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetNumber}?key=${apiKey}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.contents}>
      <div className={styles.head}>
        <div className={styles.mv}>
          <Image
            src="/images/mv.jpg"
            alt=""
            width="2400"
            height="1600"
            className="mv-img"
          />
        </div>
        <button className={styles.title} onClick={() => setIsOpen(true)}>
          【クイズ{sheetNumber}】正解者回答順 トップ7
        </button>
      </div>

      {isOpen && (
        <div className={styles.table}>
          {!isLoading &&
            data?.values
              .filter(
                (item, index) => index > 0 && Number(item[2]) === answerNumber
              )
              .map((item, index) => {
                if (index < 7)
                  return (
                    <div key={index} className={styles.tr}>
                      <div className={styles.th}>{index + 1}位</div>
                      <div className={styles.td}>{item[1]}</div>
                    </div>
                  );
              })}
        </div>
      )}
    </div>
  );
};
