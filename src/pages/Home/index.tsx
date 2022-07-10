import { useState } from "react";
import { ChatBox } from "./Components/ChatBox";
import { Contacts } from "./Components/Contacts";
import { Header } from "./Components/Header";
import { MessageHistory } from "./Components/MessageHistory";
import { useNavigate  } from 'react-router-dom';


const messages:any[] = [
    {timestamp:'1 hour ago',senderId:'aasdadasdasd1231231',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'2 hour ago',senderId:'aasdadasdasd1231232',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'3 hour ago',senderId:'aasdadasdasd1231233',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'4 hour ago',senderId:'aasdadasdasd1231234',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'5 hour ago',senderId:'aasdadasdasd1231235',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'6 hour ago',senderId:'aasdadasdasd1231236',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'7 hour ago',senderId:'aasdadasdasd1231237',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
    {timestamp:'8 hour ago',senderId:'aasdadasdasd1231238',body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestias obcaecati facere eaque nesciunt sapiente.'},
]

const Home = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const contacts = [
        { _id: '1', firstname: 'Crimson', lastname: 'Tiangco' },
        { _id: '2', firstname: 'John', lastname: 'Doe' },
        { _id: '3', firstname: 'Emma', lastname: 'Tamayo' },
        { _id: '4', firstname: 'Lebron', lastname: 'James' },
        { _id: '5', firstname: 'Mark', lastname: 'William' },
        { _id: '6', firstname: 'Calvin', lastname: 'Abueva' },
    ]


    const handleOnSend = () => {
        console.log('send:', message);
    }

    const handleOnLogout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className="container-lg flex">

            <Contacts
                className={`h-screen w-40`}
                contacts={contacts}
            />

            <div className="h-screen w-full relative flex flex-col justify-between">

                <Header
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    isSideBarOpen={sidebarOpen}
                    onLogout={handleOnLogout}
                />

               
                <MessageHistory 
                    messages={messages}
                />

                <ChatBox
                    onSend={handleOnSend}
                    onChangeMessageText={(event) => setMessage(event.target.value)}
                />
            </div>

        </div>
    )
}

export default Home;