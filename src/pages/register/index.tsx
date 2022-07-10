import { useState, useEffect } from 'react';

import FormContainer from '../../UI/FormContainer'
import FormContainerBody from "../../UI/FormContainerBody";
import { TextBox } from "../../UI/InputText";
import { FullButton } from "../../UI/Button";
import { Form } from "../../UI/Form";
import { register } from '../../API';
import { useNavigate  } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfimPassword] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);
    const [showError, setShowError] = useState<boolean>(false);

    const handleRegister = async (e: any) => {
        e.preventDefault();
        setShowError(false);
        
        if (errors.length > 0) {
            setShowError(true);
            return;
        }

        const payload = {
            firstname:firstname,
            lastname:lastname,
            username:username,
            password:password
        }

        setShowError(false);
        const result = await register(payload);
        if(result?.error) {
            setErrors(errors => [...errors, `The username "${payload.username}" is already exists`]);
            setShowError(true);
            return;
        }

        if(result?.data) {
            const client = result;
            setFirstname('');
            setLastname('');
            setUsername('');
            setPassword('');
            setConfimPassword('');
            localStorage.setItem("token", JSON.stringify(client.token));
            localStorage.setItem("_id", JSON.stringify(client.data._id));
            localStorage.setItem("firstname", JSON.stringify(client.data.firstname));
            localStorage.setItem("lastname", JSON.stringify(client.data.lastname));
            localStorage.setItem("lastname", JSON.stringify(client.data.lastname));
            localStorage.setItem("isAuthenticated", "true");
            navigate("/");
        }
    }


    useEffect(() => {
        const validator = () => {
            setErrors([]);

            if (firstname === "") {
                setErrors(errors => [...errors, 'Last Name is required field']);
            }

            if (lastname === "") {
                setErrors(errors => [...errors, 'First Name is required field']);
            }

            if (username === "") {
                setErrors(errors => [...errors, 'User Name is required field']);
            }

            if (password === "") {
                setErrors(errors => [...errors, 'Password is required field']);
            }

            if (confirmPassword !== password) {
                setErrors(errors => [...errors, "Password didn't not matched the confirm password"]);
            }
        }

        validator();
    }, [firstname, lastname, username, confirmPassword, password]);

    return (
        <FormContainer>
            <FormContainerBody>
                <Form title={'Register Account'}>

                    {errors.length > 0 && showError ? (<ul className="my-5 list-disc px-5">
                        {errors.map((value, index) => (
                            <li
                                className="text-red-500 font-semibold"
                                key={index}>
                                {value}</li>
                        ))}
                    </ul>) : null}

                    <TextBox
                        label='First Name'
                        type='text'
                        onChange={(e) => setFirstname(e.target.value)}
                        error={false}
                        value={firstname}
                    />

                    <TextBox
                        label='Last Name'
                        type='text'
                        onChange={(e) => setLastname(e.target.value)}
                        error={false}
                        value={lastname}
                    />
                    <hr className='h-1 w-full my-5' />

                    <TextBox
                        label='Username'
                        type='text'
                        onChange={(e) => setUsername(e.target.value)}
                        error={false}
                        value={username}
                    />

                    <TextBox
                        label='Password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        error={false}
                        value={password}
                    />

                    <TextBox
                        label='Confirm Password'
                        type='password'
                        onChange={(e) => setConfimPassword(e.target.value)}
                        error={false}
                        value={confirmPassword}
                    />

                    <FullButton
                        label='Register'
                        onClick={handleRegister}
                        className={'mt-5'}
                    />
                </Form>
            </FormContainerBody>
        </FormContainer>
    )
}

export default Register;