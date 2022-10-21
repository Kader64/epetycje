import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';


function Register() {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    useEffect(() => {

    }, []);
    return (
        <div>
            <div className="login_main_holder">
                <div className="login_main">
                    <div className="icon-adult"> </div>
                    <input type="text" placeholder="FirstName" className="login_main_inputs" onBlur={(e) => {
                        //WALIDACJA
                        setEmail(e.target.value);
                    }}></input>
                    <input type="text" className="login_main_inputs" placeholder="LastName" onBlur={(e) => {
                        //WALIDACJA
                        setLastname(e.target.value);
                    }}></input>
                    <input type="text" className="login_main_inputs" placeholder="email@example.com" onBlur={(e) => {
                        //WALIDACJA
                        setLastname(e.target.value);
                    }}></input>
                    <input type="password" placeholder="Password" className="login_main_inputs" onBlur={(e) => {
                        //WALIDACJA
                        setPassword(e.target.value);
                    }}></input>
                    <input type="submit" className="login_button" value="ZAREJSTRUJ"></input>
                </div>
            </div>
        </div>
    );
}

export default Register;