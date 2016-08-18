import axios from 'axios';
import Cookie from 'js-cookie';

// 'api-token-auth':"Authorization: Token ${token}";
var instance = axios.create();

instance.new = function (url) {
  this.defaults.baseURL = url;
  // this.defaults.headers = {'Content-Type' : 'application/x-www-form-urlencoded'};
};

if (Cookie.get('token')) {
  var token = Cookie.get('token');
  instance.interceptors.request.use(function(config){
    config.headers['Authorization'] = 'Token ' + token;
    return config;
  });
}

instance.login = function(user, pass) {
  console.log('login test');
  return this.post('/parent/token', {username: user, password:pass})
    .then(function(resp){
      console.log("lib/api", resp)
      var token = resp.data.token;  
      Cookie.set('token', token);
      this.interceptors.request.use(function(config){
        config.headers['Authorization'] = 'Token ' + token;
        return config;
      })
      return resp;
    }.bind(this))
};

instance.childlogin = function(user, pass) {
  console.log('login test');
  return this.post('/child/token', {username: user, password:pass})
    .then(function(resp){
      console.log("lib/api", resp)
      var token = resp.data.token;  
      Cookie.set('token', token);
      this.interceptors.request.use(function(config){
        config.headers['Authorization'] = 'Token ' + token;
        return config;
      })
      return resp;
    }.bind(this))
};
instance.logout = function() {
  Cookie.remove('token');
}

export default instance;