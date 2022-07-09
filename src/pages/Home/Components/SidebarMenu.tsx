import { CloseButton } from "./Buttons";


interface Props {
    onClose:() => void;
    isOpen:boolean;
}

export const SidebarMenu = ({onClose,isOpen}:Props) => {
    return (
        <div className={`h-screen w-full bg-black bg-opacity-30 fixed right-0 left-0 top-0 bottom-0 ${isOpen ? '':'hidden'}`}>
                <div className="h-screen bg-white fixed z-10 right-0 bottom-0 w-52">
                    <div>

                        <CloseButton onClick={onClose}/>
                        <div className="flex flex-col gap-y-2 mt-3">
                            <p className="ml-3">Change Password</p>
                            <p className="ml-3">Logout</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}