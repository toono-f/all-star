module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          inlineStyles: {
            // propsによるスタイル設定より優先させるため、各要素のstyle属性を保持する
            onlyMatchedOnce: false,
          },
          // pathデータの自動変換による予期せぬ表示崩れを防止
          convertPathData: false,
          // viewBoxの削除無効による予期せぬ表示崩れの発生を防止
          removeViewBox: false,
          removeUnknownsAndDefaults: {
            // data-nameは不要のため削除
            keepDataAttrs: false,
          },
          // gタグを削除しないように設定
          collapseGroups: false,
        },
      },
    },
    // レスポンシブ対応のため、widthとheightを削除
    "removeDimensions",
  ],
};
