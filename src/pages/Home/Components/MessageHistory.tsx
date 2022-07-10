import { Text } from "./Text";

interface IMessageHistory {
    messages: any[];
}

export const MessageHistory = ({ messages }: IMessageHistory) => {
    return (
        <div className="w-100 h-full grow flex flex-col overflow-hidden justify-end">
            <div className="p-3 flex flex-col gap-y-4 overflow-y-scroll">
                {messages.map(message => (
                    <Text
                        body={message.body}
                        timestamp={message.timestamp}
                        senderId={message.senderId}
                    />
                ))}

            </div>
        </div>

    );
}