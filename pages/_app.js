import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../assets/global.css";
import { UserContext } from "../front/context/user/userContext";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{username, setUsername}}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
export default MyApp;
