# 概要

フロントエンド開発のサンプルリポジトリです（予定）

## 環境設定

1. ルートディレクトリに`.env.local`ファイルを作成してください。

```
NEXT_PUBLIC_ORIGIN=
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_RELEASE_STAGE="dev"
NEXT_PUBLIC_BUGSNAG_API_KEY=連携するbugsnagのAPIキー
```

2. 以下コマンドを実行し、npm packageをインストールしてください。

```
npm i
```

3. 以下コマンドを実行し、開発サーバーが立ち上がることを確認してください。

```
npm run dev
```

## TODO

- bugsnagのソースマップを確認（ローカルだと確認できない模様）
- reset.cssとbase.cssの見直し（reset.cssは引用元から手を加えず、base.cssに追加設定を記述する用に修正。その後内容判断）
