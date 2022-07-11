
interface Props {
    onChange:(event:object) => void;
    value:string;
}

export const MessageText = ({onChange,value}:Props) => {
    return (
        <div className="w-full mx-2">
            {/* <input 
                type="text" 
                className="w-full border-4 h-20 px-3 mt-2"
                placeholder="Write your message here..."
                onChange={onChange}
            /> */}

            <textarea 
                className="w-full border-4 p-2" 
                placeholder="Write something ..."
                onChange={onChange}
                value={value}
                ></textarea>
        </div>
    )
}