interface HomeConfig {
  iconSpeak: string;
  iconSignin: string;
  [img: string]: string;
}

const config: HomeConfig = {
  iconSpeak: '/assets/blue/kok/icon-speak.png',
  iconSignin: '/assets/blue/kok/home/icon-signin.png'
}

module.exports = config;