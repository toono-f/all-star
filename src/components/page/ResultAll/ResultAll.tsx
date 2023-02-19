import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../Result/Result.module.scss";

type SheetApiType = {
  range: string;
  majorDimension: string;
  values: Array<Array<string | number>>;
};

const sheetId = "18DwsqC4ciKXvFOLARBBxh_VoCLDWSXV9grOq1GUuGek";
const apiKey = "AIzaSyDV8GHEM2fB6Snn4-Y8rnsIvIW2X0lehwE";

export const ResultAll = () => {
  const [data, setData] = useState<SheetApiType>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/all?key=${apiKey}`
    )
      .then((res) => res.json())
      .then((json: SheetApiType) => {
        setData(json);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: スプシ上でやること（できれば自動化したい）
  // 各シートで正解と正解順シートの計算を行う
  // スプシで全ての回答をニックネームの50音順に並べる
  // allシートのA列にそれを掲載
  // allシートのB列C列に全シートの正解数と正解順ポイントのsumを表示
  // allシート全選択→データ→範囲を並び替え→範囲の並び替えオプション→並び替え条件を列BをZ→A、列CをA→Zに変更

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
          【最終結果】正解数ランキング トップ7
        </button>
      </div>

      {isOpen && (
        <div className={styles.table}>
          {!isLoading &&
            data?.values
              .filter((_, index) => index > 0)
              .map((item, index) => {
                if (index < 7)
                  return (
                    <div key={index} className={styles.tr}>
                      <div className={styles.th}>{index + 1}位</div>
                      <div className={styles.td}>{item[0]}</div>
                    </div>
                  );
              })}
        </div>
      )}
    </div>
  );
};
