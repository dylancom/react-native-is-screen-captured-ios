import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { useIsCaptured } from 'react-native-is-screen-captured-ios';

export default function App() {
  const isCaptured = useIsCaptured();

  return (
    <View style={styles.container}>
      <Text>
        Result: {isCaptured ? 'Screen is captured' : 'Screen is not captured'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
