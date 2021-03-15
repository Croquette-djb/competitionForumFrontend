import Mock from 'mockjs';

export default {
  'post|/api/login': (option) => {
    return {
      success: true,
      data: {
        user: {
          userId: 2315,
          userName: '',
          nickname: 'testtest',
          avatar: 'c',
        }
      }
    };
  },
  'get|/api/user': (option) => {
    return {
      success: true,
      data: {
        isLogin: true,
        userInfo: {
          userId: 2315,
          userName: '',
          nickname: 'testtest',
          avatar: 'c',
        }
      }
    }
  }
}