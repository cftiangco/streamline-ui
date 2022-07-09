import {ContactCard} from './ContactCard'

interface Props {
    className:string;
    contacts:any[];
}

export const Contacts = ({className,contacts}:Props) => {
    return (
        <div className={`${className} shadow`}>
            {contacts.map((contact) => (
                <ContactCard
                    key={contact._id} 
                    firstName={contact.firstname}
                    lastName={contact.lastname}
                />
            ))}
            
        </div>
    )
}