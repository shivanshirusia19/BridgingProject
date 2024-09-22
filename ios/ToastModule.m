#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@interface RCT_EXTERN_MODULE(ToastModule, NSObject)

RCT_EXTERN_METHOD(show:(NSString *)message duration:(NSInteger)duration)

@end
