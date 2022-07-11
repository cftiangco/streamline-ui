import { AiOutlineMenu } from "react-icons/ai";
import { SidebarMenu } from "./SidebarMenu"
import {SearchBar} from './SearchBar'
interface Props {
    onClick: () => void;
    isSideBarOpen: boolean;
    onLogout: () => void;
    fullname: string;
    onResultShow:boolean;
    onSearchChange:(event:any) => void;
    searchTextValue:string;
    results:any[];
    onClickAdd:(id:string) => void;
}

export const Header = ({ onClick, isSideBarOpen, onLogout,onResultShow,onSearchChange,searchTextValue,results,onClickAdd}: Props) => {
    return (
        <div className="h-14 w-full flex items-center justify-between gap-1 shadow">
            
            <SearchBar 
                resultShow={onResultShow}
                onChange={onSearchChange}
                value={searchTextValue}
                results={results}
                onClickAdd={onClickAdd}
            />

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