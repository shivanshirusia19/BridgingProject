import Foundation

@objc(MyNativeModule)
class MyNativeModule: NSObject {

    @objc(callNativeAPI:resolver:rejecter:)
    func callNativeAPI(params: String, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
        let result = "Native API called>>> \(params)"
        resolver(result)
    }
}

