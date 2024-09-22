import React, {useEffect} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  NativeModules,
  TouchableOpacity,
  NativeEventEmitter,
} from 'react-native';
import CustomTag from './CustomTag';

const App = () => {
  //const {CustomMethods, MyModule} = NativeModules;
  const {ToastModule, MyNativeModule} = NativeModules;

  useEffect(() => {
    const event = new NativeEventEmitter(NativeModules.RNEventEmitter);
    const eventListener = event.addListener('onReady', string => {
      console.log('Event Received!!!', string);
    });
  }, []);

  const showToast = (message, duration) => {
    ToastModule.show(message, duration);
  };

  const callNativeAPI = params => {
    return MyNativeModule.callNativeAPI(params);
  };

  const handlePress = () => {
    console.log('onpress!!');
    showToast('Hellooooooo!', 2000);
    // CustomMethods.MyMethod('Hellooooo');
    // MyModule.myMethod('Helloooo');
    MyNativeModule.callNativeAPI('Hiii')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.button}>
          <Text>Click Here</Text>
        </View>
      </TouchableOpacity>
      {/* <CustomTag title="Click Here" onPress={handlePress} /> */}

      <CustomTag style={styles.customContainer} text="Custom Tag!!!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'yellow',
  },
  customContainer: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    marginTop: 20,
  },
});

export default App;
