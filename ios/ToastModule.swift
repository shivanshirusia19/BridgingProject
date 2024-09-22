import Foundation
import UIKit

@objc(ToastModule)
class ToastModule: NSObject {
  
  @objc
  func show(_ message: String, duration: Int) {
    DispatchQueue.main.async {
      let alert = UIAlertController(title: nil, message: message, preferredStyle: .alert)
      let durationSeconds = Double(duration) / 1000.0

      let keyWindow = UIApplication.shared.keyWindow
      keyWindow?.rootViewController?.present(alert, animated: true, completion: nil)
      
      DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + durationSeconds) {
        alert.dismiss(animated: true, completion: nil)
      }
    }
  }
}

