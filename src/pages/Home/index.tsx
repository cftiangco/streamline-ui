import { useState } from "react";
import { ChatBox } from "./Components/ChatBox";
import { Contacts } from "./Components/Contacts";
import { Header } from "./Components/Header";


const Home = () => {
    
    const [message,setMessage] = useState('');
    const [sidebarOpen,setSidebarOpen] = useState(false);

    const contacts = [
        { _id: '1', firstname: 'Crimson', lastname: 'Tiangco' },
        { _id: '2', firstname: 'John', lastname: 'Doe' },
        { _id: '3', firstname: 'Emma', lastname: 'Tamayo' },
        { _id: '4', firstname: 'Lebron', lastname: 'James' },
        { _id: '5', firstname: 'Mark', lastname: 'William' },
        { _id: '6', firstname: 'Calvin', lastname: 'Abueva' },
      ]

     
  const handleOnSend = () => {
    console.log('send:',message);
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
                />

                <div className="h-96 w-100 grow">

                </div>
                
                <ChatBox 
                    onSend={handleOnSend}
                    onChangeMessageText={(event) => setMessage(event.target.value)}
                />
            </div>
            
        </div>
    )
}

export default Home;