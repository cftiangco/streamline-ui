import * as React from 'react';

interface Props {
    children:React.ReactNode;
}


const FormContainerBody = ({children}:Props) => {
    return (
        <div className="py-16 px-7 shadow-lg bg-white md:w-1/3 flex flex-col justify-center items-center mx-5 sm:w-full">
            {children}
        </div>
    )
}

export default FormContainerBody;