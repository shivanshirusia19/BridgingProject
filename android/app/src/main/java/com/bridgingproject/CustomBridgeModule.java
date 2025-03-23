package com.bridgingproject;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

public class CustomBridgeModule extends ReactContextBaseJavaModule {

    public CustomBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CustomBridge";
    }

    @ReactMethod
    public void sendDataToRN(Promise promise) {
        try {
            WritableMap data = new WritableNativeMap();
            data.putString("message", "Hello from Android Native!");
            data.putInt("count", 42);
            promise.resolve(data);
        } catch (Exception e) {
            promise.reject("Error", e);
        }
    }

    @ReactMethod
    public void receiveDataFromRN(String data) {
        System.out.println("Received from RN: " + data);
    }
}
