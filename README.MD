This project was bootstrapped with [Expo](https://github.com/expo/expo).

# Available Scripts

## `yarn start`

Runs the app in the development mode.<br>

## `yarn run ios` || `yarn run android`

Prepare to start ios/android simulater
Open browser ](http://localhost:19002)
Choose run mode on menu bar

## `yarn test`

Run unit tests and snapshot tests **tests** folder

# E2E Testing with [Detox](https://blog.expo.io/testing-expo-apps-with-detox-and-react-native-testing-library-7fbdbb82ac87)

1. Go to the [Expo Tools page](https://expo.io/tools#client) and click the “Download IPA” link.<br>

2. Expand the downloaded archive and copy all files and folders in extracted folder into `e2e/bin/Exponent.app/`<br>

3. Run `yarn e2e` // need to start metro tunnel first.
