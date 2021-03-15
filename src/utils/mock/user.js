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
  }
}