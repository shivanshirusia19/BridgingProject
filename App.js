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

const App = () => {
  //const {CustomMethods, MyModule} = NativeModules;
  const {ToastModule} = NativeModules;

  useEffect(() => {
    const event = new NativeEventEmitter(NativeModules.RNEventEmitter);
    const eventListener = event.addListener('onReady', string => {
      console.log('Event Received!!!', string);
    });
  }, []);

  const showToast = (message, duration) => {
    ToastModule.show(message, duration);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('onpress!!');
          showToast('Hellooooooo!', 2000);
          // CustomMethods.MyMethod('Hellooooo');
          // MyModule.myMethod('Helloooo');
        }}>
        <View style={styles.button}>
          <Text>Click Here</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'yellow',
  },
});

export default App;
