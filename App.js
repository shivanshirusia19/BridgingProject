import React from 'react';
import {Button, View, Text, Alert} from 'react-native';
import {
  sendStaticDataToNative,
  getPropsFromNative,
  showToast,
  getDeviceModel,
} from './NativeBridge';

const App = () => {
  const handleShowToast = () => {
    showToast('Hello from Native Code!');
  };

  const handleGetModel = async () => {
    try {
      const model = await getDeviceModel();
      Alert.alert("Device Model", model);
    } catch (error) {
      Alert.alert("Error", "Failed to retrieve device model");
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Custom Bridge</Text>
      <Button title="Send Data to Native" onPress={() => sendStaticDataToNative("Hello Native!")} />
      {/* <Button title="Get Data from Native" onPress={getPropsFromNative} /> */}
      {/* <Button title="Show Native Toast" onPress={handleShowToast} /> */}
      <Button
        title="Get Device Model"
        onPress={handleGetModel}
        style={{marginTop: 20}}
      />
    </View>
  );
};

export default App;
