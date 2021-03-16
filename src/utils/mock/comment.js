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
  'post|/api/comment': (option) => {
    const payload = JSON.parse(option.body);
    var comment = {
      author: {
        nickname: Mock.mock('@cword(2, 10)'),
        avatar:  Mock.mock('@character("lower")'),
      },
      text: payload.content,
      likes: 0,
      dislikes: 0,
      time: Mock.mock('@now()'),
    };
    commentList.push(comment);
    return {
      data: {
        success: true,
      }
    }
  }
};