export const fetchData = async (chat) => {
    try {
        console.log(chat);
        const res = await fetch('http://localhost:3080',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((message)=> message.message).join(" \n ")
            })
        })

        const data = await res.json()
        console.log(data);
        return data;
        
    } catch (e) {
        console.log(e);
    }
}