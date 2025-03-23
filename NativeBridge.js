import {NativeModules} from 'react-native';

const {CustomBridge} = NativeModules;

const sendStaticDataToNative = data => {
  if (CustomBridge) {
    CustomBridge.receiveDataFromRN(data);
  }
};

const getPropsFromNative = async () => {
  try {
    const result = await CustomBridge.sendDataToRN();
    console.log('Received from Native:', result);
  } catch (error) {
    console.error('Error receiving data from Native:', error);
  }
};

const showToast = message => {
  CustomBridge.showToast(message);
};

const getDeviceModel = async () => {
  try {
    const model = await CustomBridge.getDeviceModel();
    console.log('Device Model from Native:', model);
    return model;
  } catch (error) {
    console.error('Error fetching device model:', error);
    return 'Error fetching device model';
  }
};

export {sendStaticDataToNative, getPropsFromNative, showToast, getDeviceModel};
