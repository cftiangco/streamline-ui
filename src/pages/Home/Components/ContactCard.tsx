
interface Props {
    firstName:string;
    lastName:string;
}

export const ContactCard = ({firstName,lastName}:Props) => {
    return (
        <div className="flex items-center justify-start gap-2 p-2 w-full border-b-2 hover:cursor-pointer hover:bg-gray-300">
            <div className="rounded-full bg-gray-500 h-10 w-10 flex items-center justify-center border">
                <span className="font-extrabold text-gray-100 font-serif text-1xl">{`${firstName.charAt(0)}${lastName.charAt(0)}`}</span>
            </div>
            <h5 
                className="font-bold text-gray-800">{firstName}
            <span className="hidden md:block">{lastName}</span>
            </h5>
        </div>
    )
}