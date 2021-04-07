#import "IsScreenCapturedIos.h"

@implementation IsScreenCapturedIos {
  bool hasListeners;
}

RCT_EXPORT_MODULE()

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"isScreenCaptured"];
}

- (instancetype)init
{
  self = [super init];

  if (self) {
    [[UIScreen mainScreen] addObserver:self forKeyPath:@"captured" options:NSKeyValueObservingOptionNew context:nil];
  }

  return self;
}

-(void)startObserving {
  hasListeners = YES;
}

-(void)stopObserving {
  hasListeners = NO;
}

- (void)dealloc {
  [[UIScreen mainScreen] removeObserver:self forKeyPath:@"captured"];
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary *)change context:(void *)context {
  if ([keyPath isEqualToString:@"captured"]) {
    if (@available(iOS 11.0, *)) {
      if (hasListeners) {
        [self sendEventWithName:@"isScreenCaptured" body:@(UIScreen.mainScreen.isCaptured)];
      }
    }
  }
}

RCT_REMAP_METHOD(getIsCaptured,
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  if (@available(iOS 11.0, *)) {
    resolve(@(UIScreen.mainScreen.isCaptured));
  } else {
    resolve(false);
  }
}

@end
