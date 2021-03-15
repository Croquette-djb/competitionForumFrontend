import Mock from 'mockjs';

let apiList = [];
const files = require.context('.', true, /\.js$/);

(function () {
  if (process.env.VUE_APP_IS_MOCK !== 'true') return;

  files.keys().forEach(fileName => {
    if (fileName === './index.js') return;
    apiList = apiList.concat(files(fileName).default || {});
  })
  
  apiList.forEach(api => {
    for (let [path, target] of Object.entries(api)) {
      let protocol = path.split('|');
      Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
    }
  })
})();
