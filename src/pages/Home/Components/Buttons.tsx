import { AiOutlineClose } from "react-icons/ai";

interface ICloseButton {
    onClick:() => void;
}

export const CloseButton = ({onClick}:ICloseButton) => {
    return (
        <div className="flex items-center justify-end p-3 border-b-2 cursor-pointer">
            <AiOutlineClose size={25} 
                onClick={onClick}
            />
        </div>
    )
}