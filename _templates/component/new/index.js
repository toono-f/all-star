const inputValidator = (input) => {
  if (input !== "") {
    return true;
  }
};

module.exports = [
  {
    type: "select",
    name: "category",
    message: "コンポーネントの種類を選択してください。",
    choices: ["ui", "model", "global", "functional"],
  },
  {
    type: "input",
    name: "componentName",
    message:
      "コンポーネント名をパスカルケースで入力してください。(例: ButtonSample)",
    validate: inputValidator,
  },
];
