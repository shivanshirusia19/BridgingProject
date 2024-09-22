package com.bridgingproject;

import android.widget.Toast;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyNativeModule extends ReactContextBaseJavaModule {

    public MyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyNativeModule";
    }

    @ReactMethod
    public void callNativeAPI(String params, Promise promise) {
        try {
            String result = "Native API called>>> " + params;
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject("Error ", e);
        }
    }
}
