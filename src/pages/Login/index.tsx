import React, { useState } from "react";
import { TextBox } from "../../UI/InputText";
import { FullButton } from "../../UI/Button";
import { useNavigate  } from 'react-router-dom';
import FormContainer from '../../UI/FormContainer'
import FormContainerBody from "../../UI/FormContainerBody";
import {Form} from "../../UI/Form";
import { login } from "../../API";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [usernameError, setUserNameError] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<boolean>(false)
    const [error,setError] = useState<string>('');


    const handleOnLogin = async (event: any) => {
      event.preventDefault();
  
      setPasswordError(false);
      setUserNameError(false);
      setError('');

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

      const payload = {
        username,
        password
      }

      const result = await login(payload);

      if(result?.error) {
        setError(result.error);
        return;
      }

      if(result?.data) {
        const client = result;
        setUsername('');
        setPassword('');
        localStorage.setItem("token", JSON.stringify(client.token));
        localStorage.setItem("_id", JSON.stringify(client.data._id));
        localStorage.setItem("firstname", JSON.stringify(client.data.firstname));
        localStorage.setItem("lastname", JSON.stringify(client.data.lastname));
        localStorage.setItem("lastname", JSON.stringify(client.data.lastname));
        localStorage.setItem("isAuthenticated", "true");
        navigate("/");
    }

      console.log(username, password);
    }

    const handleSignUp = () => {
        navigate("/register");
    }

    return (
      <FormContainer>
            <FormContainerBody>
                
                <Form title={'Login'}>
                    
                    {error ? <div className="my-2 text-red-500 font-semibold  px-1">{error}</div>:null}

                    <TextBox
                        label="Username"
                        onChange={(event) => setUsername(event.target.value)}
                        type={'text'}
                        error={usernameError}
                        value={username}
                    />

                    <TextBox
                        label="Password"
                        type={'password'}
                        onChange={(event) => setPassword(event.target.value)}
                        error={passwordError}
                        value={password}
                    />
                    
                    <FullButton 
                        label="Sign In"
                        onClick={(event) => handleOnLogin(event)}
                    />

                    <div className="mt-5 text-center">
                        <button
                            onClick={handleSignUp}
                        >Register an account</button>
                    </div>
                </Form>
            </FormContainerBody>
        </FormContainer>
    )
}

export default Login;