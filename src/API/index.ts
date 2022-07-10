
const CLIENT_API = process.env.REACT_APP_CLIENT_API as string;

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