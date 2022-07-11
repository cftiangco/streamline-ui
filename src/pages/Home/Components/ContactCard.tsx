
import { getClientById } from '../../../API';
import { useState, useEffect } from 'react'
import { AiOutlineUserDelete } from "react-icons/ai";

interface Props {
    contact: any,
    onClick: (id: string) => void;
    isSelected: boolean;
    onDelete: (id: string) => void;
}

const clientId = JSON.parse(localStorage.getItem('_id')!);

export const ContactCard = ({ contact, onClick, isSelected, onDelete }: Props) => {
    const [client, setClient] = useState<any>(null);

    useEffect(() => {
        const getClient = async () => {
            const myClient = contact.members.filter((c: any) => c !== clientId);
            console.log('myclient:',myClient);
            const result = await getClientById(myClient);
            setClient(result);
        }
        getClient();
    }, [contact.members]);

    return (
        <div
            className={`flex items-center justify-start gap-2 p-2 w-full border-b-2 hover:cursor-pointer hover:bg-gray-300 ${isSelected ? 'bg-gray-300 font-bold' : null}`}>

            <div onClick={(id: any) => onClick(contact._id)} className="flex items-center gap-x-1 hover:font-bold">
                <div className="rounded-full bg-gray-500 h-10 w-10 flex items-center justify-center border">
                    <span className="font-extrabold text-gray-100 font-serif text-1xl">
                        {`${client?.data?.firstname.charAt(0).toUpperCase()}${client?.data?.lastname.charAt(0).toUpperCase()}`}
                    </span>
                </div>
                <h5
                    className="text-gray-800">{client?.data?.firstname}
                    <span className="hidden md:block">{client?.data?.lastname}</span>
                </h5>
            </div>

            <p className='grow flex justify-end'>
                <AiOutlineUserDelete
                    className='text-red-600 hover:animate-bounce w-6 h-6'
                    size={18}
                    onClick={() => onDelete(contact._id)}
                />
            </p>
        </div>
    )
}