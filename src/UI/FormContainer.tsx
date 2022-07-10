import * as React from 'react';

interface Props {
    children:React.ReactNode;
}

const FormContainer = ({children}:Props) => {
    return (
        <div
            className="container flex flex-column items-center h-screen justify-center mx-auto
        ">
            {children}
        </div>
    )
}

export default FormContainer;