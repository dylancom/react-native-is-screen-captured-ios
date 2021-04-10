# react-native-is-screen-captured-ios

Detect if the system is recording, mirroring, or using AirPlay to stream the contents of the screen.
https://developer.apple.com/documentation/uikit/uiscreen/2921651-iscaptured

## Installation

```sh
npm install react-native-is-screen-captured-ios --save
```

**React Native 0.60 and above**

Run `npx pod-install`. Linking is not required in React Native 0.60 and above.

**React Native 0.59 and below**

Run `react-native link react-native-is-screen-captured-ios` to link the react-native-is-screen-captured-ios library.

## Usage

```js
import { useIsCaptured } from "react-native-is-screen-captured-ios";

const isCaptured = useIsCaptured()
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
