
interface IText {
    body:string;
    timestamp:string;
    senderId:string;
}

export const Text = ({body,timestamp,senderId}:IText) => {
    console.log('sender id:',senderId)
    return (
        <div>
            <div
                className="p-2 shadow-sm w-fit bg-gray-300 rounded-lg"
            >
                {body}
            </div>
            <small className="p-2 text-gray-500">{timestamp}</small>
        </div>
    )
}