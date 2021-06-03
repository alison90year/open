/*
 * @Author: Seanm
 * @Date: 2021-03-29 12:59:00
 */
const account = [
  {
    title: '绑定手机号码',
    label: '绑定后账户异常能及时通知',
    path: '/account/phone'
  },
  {
    title: '绑定邮箱',
    label: '绑定邮箱，用于接收账户相关信息服务',
    path: '/account/email'
  },
  {
    title: '绑定取款卡',
    label: '可绑定银行卡或虚拟币，取款方式多样',
    path: '/account/bankcard'
  },
  {
    title: '完善个人资料',
    label: '资料更完整，我们的服务更加周到',
    path: '/account/userInfo'
  },
  {
    title: '登录密码管理',
    label: '定期修改登录密码，有利账户安全',
    path: '/account/password'
  }
];
const bankList = [
  {
    title: '中国银行',
    name: 'boc'
  },
  {
    title: '建设银行',
    name: 'ccb'
  },
  {
    title: '农业银行',
    name: 'abc'
  },
  {
    title: '工商银行',
    name: 'icbc'
  },
  {
    title: '中国邮政储蓄银行',
    name: 'psbc'
  },
  {
    title: '招商银行',
    name: 'cmb'
  },
  {
    title: '交通银行',
    name: 'bocom'
  },
  {
    title: '中信银行',
    name: 'cibk'
  },
  {
    title: '平安银行',
    name: 'pabc'
  },
  {
    title: '光大银行',
    name: 'cebc'
  },
  {
    title: '浦发银行',
    name: 'spdb'
  },
  {
    title: '广发银行',
    name: 'cgb'
  },
  {
    title: '华夏银行',
    name: 'hxbc'
  },
  {
    title: '兴业银行',
    name: 'fjib'
  },
  {
    title: '民生银行',
    name: 'cmbc'
  },
  {
    title: '宁波银行',
    name: 'nbb'
  },
  {
    title: '北京银行',
    name: 'bjyh'
  },
  {
    title: '浙商银行',
    name: 'czb'
  },
  {
    title: '吉林银行',
    name: 'jilin'
  },
  {
    title: '广州银行',
    name: 'czcb'
  },
  {
    title: '长沙银行',
    name: 'cscb'
  },
  {
    title: '广西北部湾银行',
    name: 'bgb'
  },
  {
    title: '广东农信',
    name: 'gdrc'
  },
  {
    title: '桂林银行',
    name: 'glb'
  },
  {
    title: '东莞银行',
    name: 'bod'
  },
  {
    title: '杭州银行',
    name: 'hzyh'
  },
  {
    title: '江苏银行',
    name: 'jsbc'
  },
  {
    title: '广西农信',
    name: 'gxnx'
  },
  {
    title: '南京银行',
    name: 'njyh'
  },
  {
    title: '恒丰银行',
    name: 'hfyh'
  },
  {
    title: '深圳农商银行',
    name: 'sznsyh'
  },
  {
    title: '武汉农商银行',
    name: 'whnsyh'
  },
  {
    title: '上海银行',
    name: 'bosh'
  },
  {
    title: '哈尔滨银行',
    name: 'hrbb'
  },
  {
    title: '青岛银行',
    name: 'qdyh'
  },
  {
    title: '北京商业银行',
    name: 'bjsyyh'
  }
];
const prot = [
  {
    label: 'ERC20',
    value: 'ERC20'
  },
  {
    label: 'TRC20',
    value: 'TRC20'
  },
  {
    label: 'OMNI',
    value: 'OMNI'
  }
];
const WithdrawalsList = [
  {
    title: '银行卡',
    path: '/account/addbank',
    buttonName: '添加银行卡',
    tip: '最多支持添加3张银行卡'
  },
  {
    title: '虚拟币',
    path: '/account/addcoin',
    buttonName: '添加虚拟币地址',
    tip: '虚拟币地址可用于虚拟币提款，最多可绑定5个地址'
  }
];
const passwordList = [
  {
    label: '原密码',
    placeholder: '请输入原始密码',
    value: '',
    type: 'password'
  },
  {
    label: '新密码',
    placeholder: '请输入8-12位字母+数字的组合',
    value: '',
    type: 'password'
  },
  {
    label: '确认新密码',
    placeholder: '请再次输入密码',
    value: '',
    type: 'password'
  }
];

export { account, bankList, prot, WithdrawalsList, passwordList };
