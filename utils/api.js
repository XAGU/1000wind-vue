import http from './http'

//export const baseUrl = "http://localhost:3000/proxy/";
//export const baseUrl = "http://rlfz.1000wind.top/proxy/";
export const baseUrl = "http://localhost:3000/proxy/";



export default class Api {

  constructor(axios) {
    this.MyHttp = new http(axios)
  }

  SUCCESS_CODE = 200;

  setUpCookie(cookie) {
    this.MyHttp.setUpCookie(cookie); 
  };

  /**
   * 登录
   * @param {*} username 
   * @param {*} password 
   * @param {*} rememberme 
   */
  login(username, password, rememberme) {
    return this.MyHttp.requestPost(baseUrl + 'oauth2-service/oauth/token', {
      "username": username,
      "password": password,
      "grant_type": 'password',
      "client_id": 'app-client',
      "client_secret": 'client-secret-8888',
      "scope": 'all'
    });
  };

  /**
   * 登录
   */
  logout() {
    return this.MyHttp.requestPost(baseUrl + 'user-service/logout');
  };

  /**
   * 获取当前用户信息
   */
  getLoginInfo() {
    return this.MyHttp.requestGet(baseUrl + 'user-service/api/user/myself');
  };

  /**
   * 获取通知
   */
  getMessages() {
    return this.MyHttp.requestGet(baseUrl + 'message-service/api/message?page=1&limit=3')
  };

  /**
   * 获取热门课程
   */
  getHotCourse() {
    return this.MyHttp.requestGet(baseUrl + 'course-service/api/course/courseOrderByClick?page=1&limit=6')
  };

  /**
   * 获取我的课程
   */
  getMyCourse() {
    return this.MyHttp.requestGet(baseUrl + 'course-service/api/coursesOfStudent')
  };

  /**
   * 获取课程分类
   */
  getSubjects() {
    return this.MyHttp.requestGet(baseUrl + 'course-service/api/subject?page=1&limit=20')
  };

  /**
   * 根据实训分类id查实训
   */
  getCourseBySubjects(page, id) {
    if (id === 0 || id === "0") {
      return this.MyHttp.requestGet(baseUrl + 'practical-service/api/practical?page=' + page + '&limit=8')
    } else {
      return this.MyHttp.requestGet(baseUrl + 'practical-service/api/practical?page=' + page + '&limit=8&subjectType.subjectId=' + id)
    }
  };


  /**
   * 实训方案点击量加一
   */
  addPracticalClick(practicalId) {
    return this.MyHttp.requestPut(baseUrl + 'practical-service/api/practical/addclick', {
      "id": practicalId
    })
  };

  /**
   * 根据课程类型和科目查课程 
   */
  getCourseByStyleAndSubject(page, courseStyle, subjectId) {
    if (subjectId === 0 || subjectId === "0") {
      return this.MyHttp.requestGet(baseUrl + 'course-service/api/course/containSubject?page=' + page + '&limit=8&courseStyle=' + courseStyle)
    } else {
      return this.MyHttp.requestGet(baseUrl + 'course-service/api/course/containSubject?page=' + page + '&limit=8&courseStyle=' + courseStyle + "&subjectType.subjectId=" + subjectId)
    }
  };

  /**
   * 查询实战进阶的课程
   * @param {} subjectId 
   */
  getSzjjCourseByStyleAndSubject(page, subjectId) {
    return this.getCourseByStyleAndSubject(page, 0, subjectId)
  };


  /**
   * 查询技术公开课的课程
   * @param {} subjectId 
   */
  getJsgkkCourseByStyleAndSubject(page, subjectId) {
    return this.getCourseByStyleAndSubject(page, 1, subjectId)
  };

  /**
   * 查询毕设项目的课程
   * @param {} subjectId 
   */
  getBsxmCourseByStyleAndSubject(page, subjectId) {
    return this.getCourseByStyleAndSubject(page, 2, subjectId)
  };

  /**
   * 查询毕设公开课的课程
   * @param {} subjectId 
   */
  getBsgkkCourseByStyleAndSubject(page, subjectId) {
    return this.getCourseByStyleAndSubject(page, 3, subjectId)
  };




  /**
   * 获取所有的教师
   */
  getTeachers(page) {
    return this.MyHttp.requestGet(baseUrl + 'user-service/api/user?page=' + page + '&limit=10&roleId=2')
  };



  /**
   * 修改个人信息
   */
  updateSelfInfo(username, realName, phoneNum, email, desc) {
    return this.MyHttp.requestPut(baseUrl + 'user-service/api/user/myself', {
      "username": username,
      "realName": realName,
      "phoneNum": phoneNum,
      "email": email,
      "desc": desc
    })
  };


  /**
   * 获取某个课程的签到
   */
  getCourseSign(courseId) {
    return this.MyHttp.requestGet(baseUrl + 'sign-service/api/userSign?page=1&limit=10&courseId=' + courseId)
  };

}
