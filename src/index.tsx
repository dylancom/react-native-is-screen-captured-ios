import { NativeModules } from 'react-native';

type IsScreenCapturedIosType = {
  multiply(a: number, b: number): Promise<number>;
};

const { IsScreenCapturedIos } = NativeModules;

export default IsScreenCapturedIos as IsScreenCapturedIosType;
