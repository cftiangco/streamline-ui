
import * as React from 'react';

interface Props {
    children:React.ReactNode;
    title?:string;
}

export const Form = ({children,title}:Props) => {
    return (
        <form className="w-full mt-3">
            {title ? (<h2 className="text-center text-3xl mb-5 font-bold text-blue-400">{title}</h2>): null}
            {children}
        </form>
    )
}
