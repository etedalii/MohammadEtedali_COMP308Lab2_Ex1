const auth = {
  isLoggedIn: false,

  onAuthentication(userToken, password) {
    this.isLoggedIn = true;
  },
  
  getLogInStatus() {
    return this.isLoggedIn;
  },
  
  saveToken(userToken, password) {
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
