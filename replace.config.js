// eslint-disable-next-line @typescript-eslint/no-var-requires
const replace = require("replace-in-file");

// インラインで表示させるSVGにスタイルを適用させるために、SVGOプラグインで取り除くことができない不要なプロパティを削除する
const options = {
  files: "./public/images/icon/*.svg",
  from: [
    // /stroke:[0-9a-zA-Z#]+[;]?/g,
    // /fill:[0-9a-zA-Z#]+[;]?/g,
    // /stroke-width:[+-]?\d+(?:\.\d+)?px+[;]?/g,
    /clip-path:url[0-9a-zA-Z#()]+[;]?/g, // safariのみ、重複したidを指定したclip-pathを設定すると、表示されないバグを発見したため、属性の設定ごと削除する
  ],
  to: "",
};

replace(options, (error, changedFiles) => {
  if (error) return console.error("Error occurred:", error);
  for (let i = 0; i < changedFiles.length; i++) {
    console.log("Modified files:", changedFiles[i].file);
  }
});
