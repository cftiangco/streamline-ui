import { AiOutlineSearch } from "react-icons/ai";
import { SearchItem } from "./SearchItem";


interface ISearchBar {
    resultShow: boolean;
    onChange: (event: any) => void;
    value: string;
    results: any[];
    onClickAdd:(id:string) => void;
}


export const SearchBar = ({ resultShow, onChange, value, results,onClickAdd}: ISearchBar) => {
    return (
        <h4
            className="ml-5 flex border-2 px-2 py-1 rounded bg-white shrink hover:border hover:border-blue-400"
        >
            <div>
                <AiOutlineSearch
                    size={25}
                    className="text-gray-400" />
            </div>
            <div>
                <input
                    type="text"
                    className="active:border-none active:outline-none focus:outline-none"
                    placeholder="Search people..."
                    onChange={(event) => onChange(event)}
                    value={value}
                />

                <div className={`absolute bg-white w-52 shadow p-3 mt-1 ${!resultShow ? 'hidden' : null}`}>
                    <ul>
                        {results.map((result, index) => (
                            <SearchItem
                                key={index}
                                client={result}
                                onClickAdd={onClickAdd}
                            />
                        ))}
                    </ul>
                </div>

            </div>
        </h4>
    );
}