
const CLIENT_API = process.env.REACT_APP_CLIENT_API as string;
const token: any =  localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') ?? ''):'';
console.log('my token:',token);

export async function register(payload:object) {
    let url = `${CLIENT_API}/register`;
    const response = await fetch(url, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
}

export async function login(payload:object) {
    let url = `${CLIENT_API}/login`;
    const response = await fetch(url, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
}

export async function getConversations(clientId:string) {
    let url = `${CLIENT_API}/conversation/${clientId}`;
    const response = await fetch(url, {
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json();
}

export async function getClientById(clientId:string) {
    let url = `${CLIENT_API}/clients/${clientId}`;
    const response = await fetch(url, {
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json();
}

export async function getMessagesByConversationId(conversationId:string) {
    let url = `${CLIENT_API}/messages/${conversationId}`;
    const response = await fetch(url, {
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json();
}

export async function sendMessage(payload:object) {
    let url = `${CLIENT_API}/messages`;
    const response = await fetch(url, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
}

export async function searchClient(query:string) {
    let url = `${CLIENT_API}/clients?query=${query}`;
    const response = await fetch(url, {
        method:'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json();
}

export async function addConversation(payload:object) {
    let url = `${CLIENT_API}/conversation`;
    const response = await fetch(url, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
}

export async function deleteConversation(_id:string) {
    let url = `${CLIENT_API}/conversation/${_id}`;
    const response = await fetch(url, {
        method:'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json();
}