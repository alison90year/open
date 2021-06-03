/*
 * @Author: Seanm
 * @Date: 2021-03-24 17:14:20
 */
/**
 * 对列表按指定字段排序
 * @param {*} list
 * @param {*} filedName 排序字段
 * @param {*} order 默认升序，降序(desc)
 */
export function listOrderByField(list: any, fieldName: string, order: string = '') {
  let temp;
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i; j++) {
      if (list[j][fieldName] > (list[j + 1] && list[j + 1][fieldName])) {
        temp = list[j + 1];
        list[j + 1] = list[j];
        list[j] = temp;
      }
    }
  }
  if (order === 'desc') {
    list = list.reverse();
  }
  return list;
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time: any, cFormat: string): string {
  if (arguments.length === 0 || !time) {
    return '';
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date: any;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        // tslint:disable-next-line:radix
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/');
      }
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    return value.toString().padStart(2, '0');
  });
  return time_str;
}

/**
 * @description: 将手机 xxx****xxx 和邮箱 xx****@xxx.com 字符串
 * @param {string} str
 * @return {string} str
 */
export function formatStringOfAsterisk(str: string): string {
  if (/^[1][3456789]{9}$/.test(str)) {
    return str.replace(/(\d{3})\d*(\d{4})/, '$1****$2');
  } else if (str.indexOf('@') !== -1) {
    return str.replace(str.substring(2, str.lastIndexOf('@')), '****');
  }
  return str;
}

/**
 * @description: 将 2020-01-01 格式转换成 [2021, 1, 1]
 * @param {string} date
 * @return {*}
 */
export function getDateArray(date: string): number[] {
  const arr = date.split('-');
  return arr.map((item): number => {
    return item[0] === '0' ? parseInt(item[1], 10) : parseInt(item, 10);
  });
}

/**
 * @description: DatetimePicker年月日格式化
 * @param {string} datetype
 * @param {string} val
 * @return {*}
 */ interface KeyMap {
  [prop: string]: string;
}
interface DateFormatter extends KeyMap {
  year: string;
  month: string;
  day: string;
}
export function formatter(datetype: string, val: string): string {
  if (val.indexOf('0') === 0) {
    val = val.substring(1);
  }
  const map: DateFormatter = {
    year: '年',
    month: '月',
    day: '日'
  };
  return `${val + map[datetype]}`;
}

/**
 * @description: 复制功能
 * @param {*} val
 * @return {*}
 */
export function copy(val: string): void {
  const input = document.createElement('input');
  input.value = val;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
}
