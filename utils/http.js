import axios from 'axios'
import qs from 'qs'

//携带证书
axios.defaults.withCredentials = true;


//设置超时时间
axios.defaults.timeout = 10000;

export default {
  setUpCookie(cookie) {
    axios.defaults.headers.cookie = cookie;
  },

  //get请求
  requestGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, qs.stringify(params)).then(result => {
        resolve(result.data);
      }).catch(error => {
        reject(error);
      });
    });
  },

  //post请求
  requestPost(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params)).then(result => {
        resolve(result.data);
      }).catch(error => {
        reject(error);
      });
    });
  },

  //delete请求
  requestDelete(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, qs.stringify(params)).then(result => {
        resolve(result.data);
      }).catch(error => {
        reject(error);
      });
    });
  },

  //put请求
  requestPut(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, qs.stringify(params)).then(result => {
        resolve(result.data);
      }).catch(error => {
        reject(error);
      });
    });
  }

}