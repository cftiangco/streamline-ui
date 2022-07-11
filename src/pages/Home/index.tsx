import { useEffect, useState, useRef } from "react";
import { ChatBox } from "./Components/ChatBox";
import { Contacts } from "./Components/Contacts";
import { Header } from "./Components/Header";
import { MessageHistory } from "./Components/MessageHistory";
import { useNavigate } from 'react-router-dom';
import {
    getConversations,
    getMessagesByConversationId,
    sendMessage,
    searchClient,
    addConversation,
    deleteConversation
} from "../../API";

import { io } from 'socket.io-client';

const clientId = JSON.parse(localStorage.getItem('_id')!);

const Home = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState<string>('');
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [contacts, setContacts] = useState<any>([]);
    const [messages, setMessages] = useState<any[]>([]);
    const [arrivalMessage, setArrivalMessage] = useState<any>(null);
    const [selectedConversation, setSelectedConversation] = useState<any>(null);
    const [searchText,setSearchText] = useState<string>('');
    const [searchResultOpen,setSearchResultOpen] = useState<boolean>(false);
    const [searchResults,setSearchResults] = useState<any>([])
    const socket: any = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data: any) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
                body: data.body,
            });
        })
        console.log('trigger');
    }, []);

    useEffect(() => {
        if (arrivalMessage && selectedConversation?.members.includes(arrivalMessage.sender)) {
            setMessages(prev => [...prev, arrivalMessage.body]);
        }
        console.log('called')
    }, [arrivalMessage]);

    useEffect(() => {
        socket.current.emit("addClients", clientId);
        socket.current.on("getClients", (clients: any) => {
            console.log('clients:',clients);
        })
    }, [])


    useEffect(() => {
        if(searchText !== "") {
            console.log(contacts);
            const doClientsSearch = async () => {
                let filteredClients = await searchClient(searchText);
                filteredClients.data = filteredClients.data.filter((client:any) => client._id !== clientId);
                setSearchResults(filteredClients.data);
            }
            setSearchResultOpen(true);
            doClientsSearch();
        } else {
            setSearchResults([]);
            setSearchResultOpen(false);
        }
    },[searchText,contacts])

    const handleOnSend = async () => {
        if (selectedConversation) {
            const payload = {
                conversationId: selectedConversation,
                senderId: clientId,
                message,
            }
            
            let result = await sendMessage(payload);
            console.log('s')
            
            const reciever = selectedConversation.members.find((member: any) => member !== clientId)
            socket.current.emit("sendMessage", {
                senderId: clientId,
                recieverId: reciever,
                text: message,
                body: result.data,
            });
            setMessages(messages => [...messages, result.data]);
            setMessage('');
        }
    }

    const handleOnLogout = () => {
        localStorage.clear();
        navigate('/login');
    }

    const handleOnClickContacts = async (id: string) => {
        console.log('selected id', id)
        const results = await getMessagesByConversationId(id);
        setMessages(results?.data);
        const selected = contacts.find((contact: any) => contact._id === id);
        setSelectedConversation(selected);
    }

    const handleOnClickAdd = async (_id:string) => {
        let payload = {
            members:[
                clientId,
                _id
            ]
        }

        const existing = contacts.filter((c:any) => c.members.includes(payload.members[1]));
        console.log('exs',existing)
        if(existing.length === 0) {
            let newConversation = await addConversation(payload);
            setContacts(prev => [...prev,newConversation.data]);
            setSearchResultOpen(false);
            setSearchResults([]);
            setSearchText('');
        }     
    }

    const handleOnDelete = async (_id:string) => {
        const result = await deleteConversation(_id);
        let newContacts = contacts.filter((contact:any) => contact._id !== _id);
        setContacts(newContacts);
        console.log(result);
    }

    useEffect(() => {
        console.log('sample called');
        const getContacts = async (clientId: string) => {
            const result: any = await getConversations(clientId);
            console.log('result:',result)
            setContacts(result?.data);
        }
        console.log('_id:',JSON.parse(localStorage.getItem('_id')!));
        getContacts(JSON.parse(localStorage.getItem('_id')!));
    },[]);

    useEffect(() => {
        socket.current.on("welcome", (message: any) => {
            console.log('message:', message);
        })
    }, [socket])

    return (
        <div className="container-lg flex">

            <Contacts
                className={`h-screen w-60`}
                contacts={contacts}
                onClick={(e) => handleOnClickContacts(e)}
                selected={selectedConversation?._id}
                onDelete={handleOnDelete}
            />

            <div className="h-screen w-full relative flex flex-col justify-between">

                <Header
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    isSideBarOpen={sidebarOpen}
                    onLogout={handleOnLogout}
                    fullname={"Client"}
                    onResultShow={searchResultOpen}
                    onSearchChange={(e:any) => setSearchText(e.target.value)}
                    searchTextValue={searchText}
                    results={searchResults}
                    onClickAdd={handleOnClickAdd}
                />

                {selectedConversation ? (<>
                    <MessageHistory
                        messages={messages}
                        clientId={clientId}
                    />

                    <ChatBox
                        onSend={handleOnSend}
                        onChangeMessageText={(event) => setMessage(event.target.value)}
                        value={message}
                    />
                </>) : null}

            </div>

        </div>
    )
}

export default Home;