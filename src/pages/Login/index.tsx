import React, { useState } from "react";
import { TextBox } from "./components/InputText";
import { FullButton } from "./components/Button";




const Login = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [usernameError, setUserNameError] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<boolean>(false)
  
    const handleOnLogin = (event: any) => {
      event.preventDefault();
  
      setPasswordError(false);
      setUserNameError(false);

      if(username === "" && password === "") {
        setUserNameError(true);
        setPasswordError(true);
      }
  
      if (username === "") {
        setUserNameError(true);
        return;
      }
  
      if (password === "") {
        setPasswordError(true);
        return;
      }
  
      console.log(username, password);
    }

    return (
        <div
            className="container flex flex-column items-center h-screen justify-center mx-auto
        ">
            <div className="py-5 px-7 shadow-lg bg-white w-1/3 h-1/2 flex justify-center items-center">
                    
                <form className="w-full mt-3">

                    <h2 className="text-center text-3xl mb-5 font-bold text-blue-400">Streamline</h2>
                    
                    <TextBox
                        label="Username"
                        onChange={(event) => setUsername(event.target.value)}
                        type={'text'}
                        error={usernameError}
                    />

                    <TextBox
                        label="Password"
                        type={'password'}
                        onChange={(event) => setPassword(event.target.value)}
                        error={passwordError}
                    />
                    
                    <FullButton 
                        label="Sign In"
                        onClick={(event) => handleOnLogin(event)}
                    />
                    
                </form>

            </div>
        </div>
    )
}

export default Login;