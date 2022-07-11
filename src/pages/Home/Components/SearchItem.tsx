import { AiOutlineUserAdd } from "react-icons/ai";

interface ISearchItem {
    client:any;
    onClickAdd:(id:string) => void;
}

export const SearchItem = ({client,onClickAdd}:ISearchItem) => {
    return (
        <li className="flex justify-between items-center hover:text-blue-600 hover:font-semibold">
            <div>{client.firstname} {client.lastname}</div>
            <div>
                <AiOutlineUserAdd 
                    size={17}
                    className="cursor-pointer"
                    onClick={() => onClickAdd(client._id)}
                />
            </div>
        </li>
    );
}