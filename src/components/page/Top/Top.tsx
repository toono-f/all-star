import React from "react";

import { Button } from "@/components/ui/Button";

export const Top = () => {
  return (
    <main className="main">
      <div className="container">
        <section>
          <h1>Front-end Sample Repository</h1>
          <p>フロントエンド開発で扱うサンプルリポジトリです（予定）</p>
          <section>
            <h2>Command</h2>
            <table>
              <thead>
                <tr>
                  <th>Command</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>npm run dev</td>
                  <td>開発サーバーを起動します。</td>
                </tr>
                <tr>
                  <td>npm run build</td>
                  <td>本番用のアプリケーションをビルドします。</td>
                </tr>
                <tr>
                  <td>npm run start</td>
                  <td>本番サーバーを起動します。</td>
                </tr>
                <tr>
                  <td>npm run eslint:fix</td>
                  <td>ESLintによる静的検証とフォーマットを実行します。</td>
                </tr>
                <tr>
                  <td>npm run stylelint:fix</td>
                  <td>Stylelintによる静的検証とフォーマットを実行します。</td>
                </tr>
                <tr>
                  <td>npm run prettier:fix</td>
                  <td>Prettierによる静的検証とフォーマットを実行します。</td>
                </tr>
                <tr>
                  <td>npm run format</td>
                  <td>
                    ESLint + Stylelint +
                    prettierによるフォーマットを一括で実行します。
                  </td>
                </tr>
                <tr>
                  <td>npm run storybook</td>
                  <td>Storybookを起動します。</td>
                </tr>
                <tr>
                  <td>npm run snapshots</td>
                  <td>Storybookを起動し、スナップショットテストを行います。</td>
                </tr>
                <tr>
                  <td>npm run snapshots:update</td>
                  <td>
                    <code>npm run snapshots</code>
                    を実行かつ、スナップショットの更新を行います。
                  </td>
                </tr>
                <tr>
                  <td>npm run hygen:component</td>
                  <td>
                    ui/model/functional/globalコンポーネントを自動生成します。
                  </td>
                </tr>
                <tr>
                  <td>npm run hygen:page</td>
                  <td>pages/pageコンポーネントを自動生成します。</td>
                </tr>
                <tr>
                  <td>npm run svg-conversion</td>
                  <td>
                    SVGファイルを圧縮し、Reactコンポーネントに自動変換します。
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <h2>概要</h2>
            <p>
              Prettier・ESLint・Stylelintの設定は
              <a
                target="_blank"
                href="https://zenn.dev/toono_f/articles/1774dc83548079#prettier-%2B-stylelint-%2B-eslint-%E3%81%AE%E5%B0%8E%E5%85%A5"
                rel="noreferrer"
              >
                Prettier + Stylelint + ESLint の導入
              </a>
              を参考。
            </p>
          </section>
          <section>
            <h2>以下追記予定・・・</h2>
            <Button href="/">ページトップに戻る</Button>
          </section>
        </section>
      </div>
    </main>
  );
};
