import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';


function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {

    }, []);
    return (
        <div className="login_main_holder">
            <div className="login_main">
                <div className="icon-adult"> </div>
                <input type="text" placeholder="Email" className="login_main_inputs" onBlur={(e) => {
                    //WALIDACJA
                    setEmail(e.target.value);
                }}></input>
                <input type="password" placeholder="Password" className="login_main_inputs" onBlur={(e) => {
                    //WALIDACJA
                    setPassword(e.target.value);
                }}></input>
                <input type="submit" className="login_button" value="ZALOGUJ"></input>
            </div>
        </div>
    );
}

export default Login;