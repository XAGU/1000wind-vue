import qs from 'qs'

export default class MyAxios {
  constructor(ctx) {
    this.$axios = ctx.$axios
  }

  setUpCookie(cookie) {
    
  };

  //get请求
  requestGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      this.$axios.get(url, qs.stringify(params)).then(result => {
        resolve(result.data);
      }).catch(error => reject(error));
    });
  };

  //post请求
  requestPost(url, params = {}) {
    return new Promise((resolve, reject) => {
      this.$axios.post(url, qs.stringify(params)).then(result => {
        resolve(result.data);
      }).catch(error => reject(error));
    });
  };

  //delete请求
  requestDelete(url, params = {}) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(url, qs.stringify(params)).then(result => {
        resolve(result.data);
      }).catch(error => reject(error));
    });
  };

  //put请求
  requestPut(url, params = {}) {
    return new Promise((resolve, reject) => {
      this.$axios.put(url, qs.stringify(params)).then(result => {
        resolve(result.data);
      }).catch(error => reject(error));
    });
  }
};
