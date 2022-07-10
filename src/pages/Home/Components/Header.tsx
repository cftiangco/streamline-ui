import { AiOutlineMenu } from "react-icons/ai";
import {SidebarMenu} from "./SidebarMenu"
interface Props {
    onClick:() => void;
    isSideBarOpen:boolean;
    onLogout:() => void;
}

export const Header = ({onClick,isSideBarOpen,onLogout}:Props) => {
    return (
        <div className="h-12 w-100 flex items-center justify-between gap-3 shadow">
            <h4 className="ml-5">
                Hi <span className="font-bold text-lg">Crimson T.</span>
            </h4>

            <div className="cursor-pointer mr-5">
                <AiOutlineMenu 
                    size={25}
                    onClick={onClick}
                />  
            </div>

            <SidebarMenu 
                onClose={onClick}
                isOpen={isSideBarOpen}
                onLogout={onLogout}
            />
            
        </div>
    )
}