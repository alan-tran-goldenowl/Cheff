module.exports = {
  env: {
    node: true,
    es6: true
  },
  parser: "babel-eslint",
  plugins: ["react", "react-native", "jsx-a11y", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unexpected-multiline": "error",
    "react/jsx-filename-extension": [0]
  },
  extends: "airbnb"
};
