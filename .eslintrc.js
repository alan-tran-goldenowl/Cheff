module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prop-types": 0,
      "react/destructuring-assignment": 0,
      "no-unused-expressions": 0,
      "import/prefer-default-export": 0,
      "global-require": 0,
      "react/no-string-refs": 0,
      "no-underscore-dangle": 0,
      "react/jsx-no-bind": 0,
      "default-case": 0,
      "consistent-return": 0,
      "camelcase": 0,
      'react/jsx-props-no-spreading': 0,
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],
      "max-len": [
        "error",
        150,
        {
          "ignoreTemplateLiterals": true
        }
      ],
  },
  "settings": {
    "import/resolver": {
      "babel-module": {
        "alias": {
          "constants": "./src/constants/",
          "assets": "./assets/",
          "utils": './src/utils/',
          "components": './src/components/',
          "apis": './src/apis/',
          "navigation": './src/navigation/',
          "screens": './src/screens'
      }
    }
  }
};
