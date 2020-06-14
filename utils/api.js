import http from './http'

export const baseUrl = "http://localhost:3000/proxy/";
//export const baseUrl = "http://localhost:8080/proxy";


const SUCCESS_CODE = 200;

export default {
  SUCCESS_CODE,

  setUpCookie(cookie) {
    http.setUpCookie(cookie);
  },

  /**
   * 登录
   * @param {*} username 
   * @param {*} password 
   * @param {*} rememberme 
   */
  login(username, password, rememberme) {
    return http.requestPost(baseUrl + 'login', {
      "username": username,
      "password": password,
      "remember-me": rememberme
    });
  },

  /**
   * 获取当前用户信息
   */
  getLoginInfo() {
    return http.requestGet(baseUrl + 'api/user/myself');
  },

  /**
   * 获取通知
   */
  getMessages() {
    return http.requestGet(baseUrl + 'api/message?page=1&limit=3')
  },

  /**
   * 获取热门课程
   */
  getHotCourse() {
    return http.requestGet(baseUrl + 'api/course/courseOrderByClick?page=1&limit=6')
  },

  /**
   * 获取我的课程
   */
  getMyCourse() {
    return http.requestGet(baseUrl + 'api/coursesOfStudent')
  },

  /**
 * 获取课程分类
 */
  getSubjects() {
    return http.requestGet(baseUrl + 'api/subject?page=1&limit=20')
  },

  /**
   * 根据实训分类id查实训
   */
  getCourseBySubjects(id) {
    if (id === 0 || id === "0") {
      return http.requestGet(baseUrl + 'api/practical?page=1&limit=8')
    } else {
      return http.requestGet(baseUrl + 'api/practical?page=1&limit=8&subjectId=' + id)
    }
  },


  /**
* 实训方案点击量加一
*/
  addPracticalClick(practicalId) {
    return http.requestPut(baseUrl + 'api/practical/addclick', { "id": practicalId })
  },

  /**
  * 根据课程类型和科目查课程 
  */
  getCourseByStyleAndSubject(courseStyle, subjectId) {
    if (subjectId === 0 || subjectId === "0") {
      return http.requestGet(baseUrl + 'api/course/containSubject?page=1&limit=8&courseStyle=' + courseStyle)
    } else {
      return http.requestGet(baseUrl + 'api/course/containSubject?page=1&limit=8&courseStyle=' + courseStyle + "&subjectType.subjectId=" + subjectId)
    }
  },

  /**
   * 查询实战进阶的课程
   * @param {} subjectId 
   */
  getSzjjCourseByStyleAndSubject(subjectId) {
    return this.getCourseByStyleAndSubject(0, subjectId)
  },


  /**
   * 查询技术公开课的课程
   * @param {} subjectId 
   */
  getJsgkkCourseByStyleAndSubject(subjectId) {
    return this.getCourseByStyleAndSubject(1, subjectId)
  },

  /**
   * 查询毕设项目的课程
   * @param {} subjectId 
   */
  getBsxmCourseByStyleAndSubject(subjectId) {
    return this.getCourseByStyleAndSubject(2, subjectId)
  },

  /**
   * 查询毕设公开课的课程
   * @param {} subjectId 
   */
  getBsgkkCourseByStyleAndSubject(subjectId) {
    return this.getCourseByStyleAndSubject(3, subjectId)
  },


}