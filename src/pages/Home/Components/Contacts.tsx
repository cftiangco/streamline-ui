import {ContactCard} from './ContactCard'

interface Props {
    className:string;
    contacts:any[];
    onClick:(e:any) => void;
    selected:any;
    onDelete:(id:string) => void
}

export const Contacts = ({className,contacts,onClick,selected,onDelete}:Props) => {
    if(contacts.length === 0 || !contacts) {
        return (
            <div className={`${className} text-center flex justify-center items-center`}>
                No available contacts
            </div>
        )
    }

    return (
        <div className={`${className} shadow`}>
            {contacts.map((contact,index) => (
                <ContactCard
                    key={index} 
                    contact={contact}
                    onClick={onClick}
                    isSelected={selected === contact._id}
                    onDelete={onDelete}
                />
            ))}
            
        </div>
    )
}