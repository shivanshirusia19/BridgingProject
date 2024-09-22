#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import <UIKit/UIKit.h>

@interface CustomTagManager : RCTViewManager
@end

@implementation CustomTagManager

RCT_EXPORT_MODULE(CustomTag)

- (UIView *)view {
  UILabel *label = [[UILabel alloc] init];
  label.textAlignment = NSTextAlignmentCenter;
  label.text = @"Default Text";
  return label;
}

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

// - (UIView *)view {
//   UIButton *button = [UIButton buttonWithType:UIButtonTypeSystem];
//   [button setTitle:@"Click Me" forState:UIControlStateNormal];

//   [button addTarget:self action:@selector(buttonTapped:) forControlEvents:UIControlEventTouchUpInside];

//   return button;
// }

// - (void)buttonTapped:(UIButton *)sender {
//   UIView *view = sender;
//   [self.bridge.eventDispatcher sendInputEventWithName:@"onPress" body:@{@"target": view.reactTag}];
// }

// RCT_EXPORT_VIEW_PROPERTY(title, NSString)

@end


