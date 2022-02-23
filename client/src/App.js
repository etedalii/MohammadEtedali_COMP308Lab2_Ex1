import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import auth from "./components/auth/auth";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

//     if (storedUserLoggedInInformation === '1') {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem('isLoggedIn', '1');
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//   };

//   return (
//     <React.Fragment>
//       <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;

function App() {
  return (
    <div className="wrapper">
      <React.Fragment>
        <MainHeader />
        <main>
          <BrowserRouter>
            <Switch>
              <Route
                path="/home"
                render={(data) =>
                  auth.getLogInStatus() ? (
                    <Home {...data}></Home>
                  ) : (
                    <Redirect to={{ pathname: "/" }}></Redirect>
                  )
                }
              ></Route>
              {/* <Route path="/thankyou" render={data=>auth.getLogInStatus()?( <Thankyou {...data}></Thankyou>): (<Redirect to={{pathname:'/'}}></Redirect>)}></Route> */}
              <Route exact path="/" component={Login}></Route>
            </Switch>
          </BrowserRouter>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
