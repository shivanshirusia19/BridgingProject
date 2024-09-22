#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>
#import <React/RCTEventEmitter.h>

//Custom Methods

@interface RCT_EXTERN_MODULE(CustomMethods, NSObject)

RCT_EXTERN_METHOD(MyMethod : (NSString *) param)

@end

// ToastModule
@interface RCT_EXTERN_MODULE(ToastModule, NSObject)

RCT_EXTERN_METHOD(show:(NSString *)message duration:(NSInteger)duration)

@end

// MyNativeModule
@interface RCT_EXTERN_MODULE(MyNativeModule, NSObject)

RCT_EXTERN_METHOD(callNativeAPI:(NSString *)params resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end

//Event Emitter

@interface RCT_EXTERN_MODULE(RNEventEmitter, RCTEventEmitter)

RCT_EXTERN_METHOD(supportedEvents)


@end

