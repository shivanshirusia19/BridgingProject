package com.bridgingproject;

import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.view.ViewGroup;
import android.content.Context;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class CustomTagManager extends SimpleViewManager<TextView> {

    public static final String REACT_CLASS = "CustomTag";

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
         TextView textView = new TextView(reactContext);
         textView.setLayoutParams(new ViewGroup.LayoutParams(
                 ViewGroup.LayoutParams.MATCH_PARENT,
                 ViewGroup.LayoutParams.WRAP_CONTENT));
         return textView;

//       Button button = new Button(reactContext);
//       button.setLayoutParams(new ViewGroup.LayoutParams(
//               ViewGroup.LayoutParams.WRAP_CONTENT,
//               ViewGroup.LayoutParams.WRAP_CONTENT
//       ));
//
//       button.setOnClickListener(new View.OnClickListener() {
//           @Override
//           public void onClick(View v) {
//               WritableMap event = Arguments.createMap();
//               ReactContext reactContext = (ReactContext) v.getContext();
//               reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
//                       v.getId(),
//                       "onPress",
//                       event
//               );
//           }
//       });
//
//       return button;
    }

//      @ReactProp(name = "title")
//    public void setTitle(Button view, String title) {
//        view.setText(title);
//    }



     @ReactProp(name = "text")
     public void setText(TextView view, String text) {
         view.setText(text);
     }
}

