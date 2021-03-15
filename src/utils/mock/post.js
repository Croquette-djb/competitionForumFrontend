import Mock from 'mockjs';

let postList = [];
const dataTemplate = {
  'posts|1-10': [{
    id: '@natural',
    title: '@ctitle',
    author: {
      nickname: '@cword(2, 10)',
      avatar: '@character("lower")'
    },
    text: '@cparagraph',
    likes: '@natural(0, 1000)',
    dislikes: '@natural(0, 100)',
    comments: '@natural(0, 200)',
    views: '@natural(2, 2000)',
    time: '@now',
    activity: '@datetime(d)' + 'd' + '@datetime(H)' + 'h',
  }]
}

export default {
  'get|/api/posts': (option) => {
    if (postList.length == 0) postList = Mock.mock(dataTemplate).posts;
    return postList;
  },
  'get|/api/post/\\d': (option) => {
    var id = typeof option.url === 'string' && option.url.replace('/api/post/', '');
    let res = {};
    postList.forEach((post) => {
      if (post.id.toString() == id) res = post;
    });
    return res;
  },
  'post|/api/post': (option) => {
    return {};
  }
}