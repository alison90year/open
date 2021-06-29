
module.exports = ({
  file
}) => {
  let remUnit;
  // 判断条件 请自行调整 
  if (file && file.dirname && file.dirname.indexOf("vant") > -1) {
    remUnit = 37.5;
  } else {
    remUnit = 75;
  }

  return {
    plugins: {
      'postcss-pxtorem': {
        rootValue: remUnit,
        propList: ['*'],
      },
    },
  }
};
