import React from "react";

const Authcontext = React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},
})
export default Authcontext;