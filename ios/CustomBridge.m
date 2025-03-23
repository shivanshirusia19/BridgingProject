//
//  CustomBridge.m
//  BridgingProject
//
//  Created by Shivanshi Rusia on 18/03/25.
//

#import <Foundation/Foundation.h>
#import "CustomBridge.h"
#import <UIKit/UIKit.h>

@implementation CustomBridge

RCT_EXPORT_MODULE();

//// Method to send data from Native to RN
//RCT_REMAP_METHOD(sendDataToRN, sendDataToRNWithResolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
//{
//    @try {
//        NSDictionary *data = @{
//            @"message": @"Hello from iOS Native!",
//            @"count": @42
//        };
//        resolve(data);
//    } @catch (NSException *exception) {
//        reject(@"error", @"Failed to send data", nil);
//    }
//}
//
// Method to receive data from RN
RCT_EXPORT_METHOD(receiveDataFromRN:(NSString *)data)
{
    NSLog(@"Received from RN: %@", data);
}

RCT_EXPORT_METHOD(showToast:(NSString *)message)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"Native Toast"
                                                                   message:message
                                                            preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *ok = [UIAlertAction actionWithTitle:@"OK"
                                               style:UIAlertActionStyleDefault
                                             handler:nil];
    [alert addAction:ok];

    UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
    [rootViewController presentViewController:alert animated:YES completion:nil];
  });
}

RCT_EXPORT_METHOD(getDeviceModel:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  @try {
    NSString *model = [[UIDevice currentDevice] model];
    resolve([NSString stringWithFormat:@"Device Model: %@", model]);
  }
  @catch (NSException *exception) {
    reject(@"error", @"Unable to retrieve device model", nil);
  }
}

@end
