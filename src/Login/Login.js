import React from 'react';
import {  useState } from "react";
import './Login.css';
import { Container} from 'reactstrap';
export const Login = (props) => {
    const [LoginForm, setLoginForm] = useState({
        Email: "",
        Password: "",
    });

    const [formErrors, setFormErros] = useState({
        EmailErrors: null,
        PasswordErros: null,
    });

    const handleFormChange = (e) => {
        console.log(e.target.value, e.target.name)
        setLoginForm({
            Email: e.target.name === 'Email' ? e.target.value : LoginForm.Email,
            Password: e.target.name === 'Password' ? e.target.value : LoginForm.Password,
        });
        let x = e.target.value.length;
        let re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        setFormErros({
            EmailErrors: e.target.name === 'Email' ? (x === 0) ? "this filed is required" :(!re.test(e.target.value)) ? "that not email format ": null : formErrors.EmailErrors,
            PasswordErros: e.target.name === 'Password' ? (x === 0) ? "this filed is required" : (x < 8) ? "Password length not less than 8 characters" : null : LoginForm.PasswordErros,
        });
    };

    const handleFormSubmit = () => {
        console.log(LoginForm);
        const { Email, Password } = LoginForm;
        setFormErros({
            EmailErrors: Email.length > 0 ? null : "This field is required",
            PasswordErros: Password.length > 0 ? null : "This field is required",
        });
        if(formErrors.EmailErrors===null && formErrors.PasswordErros===null){
            props.history.push("/todo");
        
    }
    else{
    }
    };
    return (
        <>
            <Container>
                <h2>Login</h2>
                <br />
                <input
                    onChange={handleFormChange}
                    placeholder="Email"
                    name="Email"
                    value={LoginForm.Email}
                    className={`form-control mt-4 ${formErrors.EmailErrors ? "border-danger" : ""
                        }`}
                />
                <br />
                <small className="text-danger"> {formErrors.EmailErrors}</small>
                <input
                    onChange={handleFormChange}
                    placeholder="Password"
                    name="Password"
                    className={`form-control mt-4 mb-4 ${formErrors.PasswordErros ? "border-danger" : ""
                        }`}
                    value={LoginForm.Password}
                />
                <small className="text-danger"> {formErrors.PasswordErros}</small>
                <button className="d-block btn btn-info" onClick={handleFormSubmit}>
                    Login
      </button>
            </Container>
        </>
    )


}