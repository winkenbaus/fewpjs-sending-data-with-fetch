

function submitData(name, email) {
    fetch("http://localhost:3000/users", {
        method: "POST" , 
        headers: {
            "Content-Type": "application/json" ,
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
    })
    .then(response => response.json())
    .then(data => {
        renderData(data)
    })
    .catch((error) => {
        console.error("Error:", error);
    })
}

function renderData(user) {
    const name = user.name
    const email = user.email
    const id = user.id
    const h1 = document.createElement("h1")
    h1.innerText = (name + " " + email + " " + id)
    document.body.appendChild(h1)   
}