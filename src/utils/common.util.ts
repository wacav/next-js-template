export class CommonUtils {
  static isIe() {
    return /MSIE \d|Trident.*rv:/.test(navigator.userAgent);
  }
}
