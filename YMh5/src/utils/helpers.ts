/**
 * 获取浏览器类型
 * @returns
 */
export const BrowserType = (): string => {
  const userAgent = window.navigator.userAgent;

  if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
    return 'Safari';
  }

  if (userAgent.indexOf('Edge') > -1) {
    return 'Edge';
  }

  if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox';
  }

  if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome';
  }

  if (userAgent.indexOf('.NET') > -1) {
    return 'IE';
  }

  return '';
};

/**
 * 判断是否支持webp图片格式
 */
export const checkWebp = (): boolean => {
  try {
    return document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0
      ? true
      : false;
  } catch (err) {
    return false;
  }
};

// 是否支持webp图片格式标识
export const isWebp: boolean = checkWebp();
