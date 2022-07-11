
import { SendButton } from "./SendButton"
import {MessageText} from "./MessageText"

interface Props {
    onSend:() => void;
    onChangeMessageText:(event:any) => void;
    value:string;
}

export const ChatBox = ({onSend,onChangeMessageText,value}:Props) => {
    return (
        <div>
            <div className="w-full h-20 flex items-center p-0 m-0 gap-2">
                
                <MessageText 
                    onChange={onChangeMessageText}
                    value={value}
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