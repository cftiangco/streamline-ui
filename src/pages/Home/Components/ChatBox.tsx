
import { SendButton } from "./SendButton"
import {MessageText} from "./MessageText"

interface Props {
    onSend:() => void;
    onChangeMessageText:(event:any) => void;
}

export const ChatBox = ({onSend,onChangeMessageText}:Props) => {
    return (
        <div>
            <div className="w-full h-20 flex items-center p-0 m-0 gap-2">
                
                <MessageText 
                    onChange={onChangeMessageText}
                />

                <SendButton 
                    onClick={onSend}
                />

            </div>

            <div className="h-5 text-center flex items-center justify-center">
                <small className="text-white font-bold">Copyright - 2022</small>
            </div>
        </div>
    )
}