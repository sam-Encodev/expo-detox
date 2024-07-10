# React Native with Detox

Packages used:
- [Expo](https://expo.dev//) Create universal native apps that run on Android, iOS, and the web.
- [jest](https://jestjs.io/) A delightful JavaScript Testing Framework with a focus on simplicity.
- [React Native](https://reactnative.dev/) Create native apps for Android, iOS, and more using React
- [detox-cli](https://wix.github.io/Detox/docs/introduction/getting-started) An open-source end-to-end (E2E) testing framework for React Native mobile applications.

[Setup Instructions](https://wix.github.io/Detox/docs/introduction/getting-started)

Be sure to have the following:
- ios
    - simulator, device iPhone 15, running the latest version of ios

run tests
```
detox test --configuration ios.sim.debug
```