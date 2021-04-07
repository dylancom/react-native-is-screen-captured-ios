import { useState, useEffect } from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';

type IsScreenCapturedIosType = {
  getIsCaptured(): Promise<boolean>;
};

const { IsScreenCapturedIos } = NativeModules;
const emitter = new NativeEventEmitter(IsScreenCapturedIos);

export const useIsCaptured = () => {
  const [isCaptured, setIsCaptured] = useState(false);

  useEffect(() => {
    async function setInitialState() {
      const isScreenCaptured = await IsScreenCapturedIos.getIsCaptured();
      setIsCaptured(isScreenCaptured);
    }
    setInitialState();

    const subscription = emitter.addListener('isScreenCaptured', (data) => {
      setIsCaptured(data);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return isCaptured;
};

export default IsScreenCapturedIos as IsScreenCapturedIosType;
