import { Text } from "./Text";

interface IMessageHistory {
    messages: any[];
    clientId:string;
}

export const MessageHistory = ({ messages,clientId}: IMessageHistory) => {

    if(!messages || messages.length === 0) {
        return (
            <div className="w-100 h-full grow flex flex-col overflow-hidden justify-end">
                <div className="p-3 flex flex-col gap-y-4 overflow-y-scroll">
                    No message(s) history for this conversation
                </div>
            </div>
    
        );
    }

    return (
        <div className="w-100 h-full grow flex flex-col overflow-hidden justify-end">
            <div className="p-3 flex flex-col gap-y-4 overflow-y-scroll">
                {messages.map((message,index) => (
                    <Text
                        key={index}
                        body={message.message}
                        timestamp={message.createdAt}
                        owner={clientId === message.senderId}
                    />
                ))}

            </div>
        </div>

    );
}