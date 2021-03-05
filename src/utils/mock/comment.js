import Mock from 'mockjs';

let commentList = [];
const dataTemplate = {
  'comments|3-15': [{
    author: {
      nickname: '@cword(2, 10)',
      avatar: '@character("lower")'
    },
    text: '@cparagraph(1, 3)',
    likes: '@natural(0, 200)',
    dislikes: '@natural(0, 30)',
    time: '@now("hour")',
  }]
}

export default {
  'get|/api/comments': (option) => {
    if (commentList.length == 0) commentList = Mock.mock(dataTemplate).comments;
    return commentList;
  },
};