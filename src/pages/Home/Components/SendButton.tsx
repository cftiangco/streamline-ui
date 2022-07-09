import { AiOutlineSend } from "react-icons/ai";

interface Props {
    onClick:() => void;
}

export const SendButton = ({onClick}:Props) => {
    return (
        <div 
            className="p-3 bg-blue-500 h-16 flex justify-center items-center w-20 rounded hover:bg-blue-300 mr-4 hover:cursor-pointer"
            onClick={onClick}
        >
            <button><AiOutlineSend size={25} color={'white'}/></button>
        </div>
    )
}