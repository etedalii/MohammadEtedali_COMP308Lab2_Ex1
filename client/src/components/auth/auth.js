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

  async logout() {
    await apis.logoutUser().then((res) => {
      this.isLoggedIn = res.data.success;
    });
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
