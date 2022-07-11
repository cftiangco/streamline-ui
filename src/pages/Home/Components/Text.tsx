import moment from 'moment';

interface IText {
    body:string;
    timestamp:string;
    owner:boolean;
}

export const Text = ({body,timestamp,owner}:IText) => {
    return (
        <div className={`flex flex-col ${owner ?'items-end':''}`}>
            <div
                className={`p-2 shadow-sm w-fit  rounded-lg ${owner ? 'bg-blue-500 text-white':'bg-gray-300'}`}
            >
                {body}
            </div>
            <small className="p-2 text-gray-500">{moment(timestamp).fromNow()}</small>
        </div>
    )
}