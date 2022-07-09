
interface Props {
    onChange:(event:object) => void;
}

export const MessageText = ({onChange}:Props) => {
    return (
        <div className="w-full">
            <input 
                type="text" 
                className="w-full border-4 h-20 px-3 mt-2"
                placeholder="Write your message here..."
                onChange={onChange}
            />
        </div>
    )
}