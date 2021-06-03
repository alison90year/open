const routes = [
  {
    path: '/home',
    name: 'home',
    component: '@/views/home/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/account',
    name: 'account',
    component: '@/views/account/account1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/account/phone',
    name: 'phone',
    component: '@/views/account/account1/phone/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/account/email',
    name: 'email',
    component: '@/views/account/account1/email/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/account/bankcard',
    name: 'bankcard',
    component: '@/views/account/account1/bankcard/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/account/addbank',
    name: 'addbank',
    component: '@/views/account/account1/bankcard/add-bank.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/account/addcoin',
    name: 'addcoin',
    component: '@/views/account/account1/bankcard/add-coin.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/account/userInfo',
    name: 'userInfo',
    component: '@/views/account/account1/userInfo/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/account/password',
    name: 'password',
    component: '@/views/account/account1/password/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/agent',
    name: 'agent',
    component: '@/views/agent/agent1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/help',
    name: 'help',
    component: '@/views/help/help1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/course',
    name: 'course',
    component: '@/views/help/help1/course/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/message',
    name: 'message',
    component: '@/views/message/message1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/message/detail',
    name: 'messageDetail',
    component: '@/views/message/message1/detail/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/set',
    name: 'set',
    component: '@/views/set/set1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: '@/views/feedback/feedback1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: '@/views/about/about1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/entry/:type',
    name: 'entry',
    component: '@/views/entry/entry1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: '@/views/promotion/promotion1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: '@/views/reset-password/reset-password1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/personal',
    name: 'personal',
    component: '@/views/personal/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/vip',
    name: 'vip',
    component: '@/views/vip/vip1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/vip-rules',
    name: 'vip-rules',
    component: '@/views/vip-rules/vip-rules1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/customer-service',
    name: 'customer-service',
    component: '@/views/customer-service/customer-service1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/sponsor',
    name: 'sponsor',
    component: '@/views/sponsor/sponsor1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/share',
    name: 'share',
    component: '@/views/share/share1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/share-record',
    name: 'share-record',
    component: '@/views/share-record/share-record1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  },
  {
    path: '/share-invalid',
    name: 'share-invalid',
    component: '@/views/share-invalid/share-invalid1/index.vue',
    options: {
      meta: {
        index: 1
      }
    }
  }
];

module.exports = { routes };
