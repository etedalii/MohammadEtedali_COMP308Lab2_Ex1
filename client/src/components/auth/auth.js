import apis from "../api";

const auth = {
  isLoggedIn: false,

  async onAuthentication(userToken, password) {
    let payLoad = {
      username: userToken,
      password: password
    };
    let result;
    await apis.loginUser(payLoad).then((res) => {
      this.isLoggedIn = res.data.success;
      result = res.data;
    });

    return result;
  },
  
  getLogInStatus() {
    return this.isLoggedIn;
  },
  
  saveToken(userToken) {
    localStorage.setItem("token", JSON.stringify(userToken));
  },

  saveDataToLocalStorage(data) {
    localStorage.setItem("my_data", JSON.stringify(data));
  },

  getDataToLocalStorage() {
    const dataString = localStorage.getItem('my_data');
    const data = JSON.parse(dataString);
    return data;
  },

  logout() {
    localStorage.removeItem('my_data');
    localStorage.removeItem('token');
    this.isLoggedIn = false
    return true;
  },

  getToken() {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    return userToken != null ;
  },
};
export default auth;
