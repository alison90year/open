/*
 * @Author: Seanm
 * @Date: 2021-03-30 20:29:19
 */
const navFirst = [
  {
    title: '新手帮助',
    label: '存款极速到账',
    name: '1'
  },
  {
    title: '游戏问题',
    label: '主流体育彩票玩法',
    name: '2'
  },
  {
    title: '企业事务',
    label: '提供全面技术支持',
    name: '3'
  },
  {
    title: '联系我们',
    label: '为您提供全天候服务',
    name: '4'
  }
];
const navSecond = [
  [
    {
      title: '开户',
      name: '1'
    },
    {
      title: '存款教程',
      name: '2'
    },
    {
      title: '存款',
      name: '3'
    },
    {
      title: '取款',
      name: '4'
    },
    {
      title: '转账',
      name: '5'
    },
    {
      title: '优惠规则',
      name: '6'
    },
    {
      title: '浏览器格式',
      name: '7'
    },
    {
      title: '体育投注教程',
      name: '8'
    },
    {
      title: '防劫持教程',
      name: '9'
    },
    {
      title: '忘记密码',
      name: '10'
    },
    {
      title: '钱包转账',
      name: '11'
    }
  ],
  [
    {
      title: '体育投注-让球教程',
      name: '1'
    },
    {
      title: '体育投注-大小球教程',
      name: '2'
    },
    {
      title: '体育常见问题',
      name: '3'
    },
    {
      title: '彩票问题',
      name: '4'
    },
    {
      title: '电子竞技',
      name: '5'
    },
    {
      title: '体育问题',
      name: '6'
    },
    {
      title: '真人问题',
      name: '7'
    },
    {
      title: '其他问题',
      name: '8'
    }
  ],
  [
    {
      title: '技术支持',
      name: '1'
    },
    {
      title: '竞猜责任',
      name: '2'
    },
    {
      title: '关于我们',
      name: '3'
    },
    {
      title: '规则条款',
      name: '4'
    },
    {
      title: '合营计划',
      name: '5'
    },
    {
      title: '隐私保护规则',
      name: '6'
    }
  ],
  [
    {
      title: '在线客服',
      name: '1'
    }
  ]
];
const pay = [
  {
    title: '大额充值',
    money: '（100-4999）',
    name: 'daechongzhi',
    step: 4
  },
  {
    title: '支付宝',
    money: '（100-4999）',
    name: 'alipay',
    step: 6
  },
  {
    title: '支付宝离线',
    money: '（100-4999）',
    name: 'alipaylixian',
    step: 8
  },
  {
    title: '支付宝转账',
    money: '（100-4999）',
    name: 'alipayTransfer',
    step: 7
  },
  {
    title: '网银转账',
    money: '（100-4999）',
    name: 'onlineTransfer',
    step: 4
  },
  {
    title: '虚拟币扫码',
    money: '（100-49999）',
    name: 'xuniPay',
    step: 8
  },
  {
    title: '代客充值',
    money: '（100-49999）',
    name: 'dkpay',
    step: 3
  },
  {
    title: '买币支付',
    money: '（100-4999）',
    name: 'mb',
    step: 5
  },
  {
    title: '云闪付',
    money: '（100-4999）',
    name: 'yunshanfu',
    step: 5
  }
];
const tabItem = [
  {
    title: '让球',
    value: 0
  },
  {
    title: '大小球',
    value: 1
  }
];
const bollList = [
  {
    title: '0',
    des: '平手盘'
  },
  {
    title: '0/0.5',
    des: '平手半球盘'
  },
  {
    title: '0.5',
    des: '半球盘'
  },
  {
    title: '0.5/1',
    des: '半球/一球盘'
  },
  {
    title: '1',
    des: '半球/一球盘'
  },
  {
    title: '1/1.5',
    des: '一球/半球盘'
  },
  {
    title: '1.5',
    des: '球半盘'
  },
  {
    title: '1.5/2',
    des: '球半/两球盘'
  },
  {
    title: '2',
    des: '两球'
  },
  {
    title: '2/2.5',
    des: '两球/两球半'
  },
  {
    title: '2.5',
    des: '两球半'
  },
  {
    title: '2.5/3',
    des: '两球半/三球'
  }
];
export { navFirst, navSecond, pay, tabItem, bollList };
