// function submitData(name, email) {
//     fetch("http://localhost:3000/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Steve",
//     email: "steve@steve.com"
//   })
// }); 
// }

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
    console.log("Success:", data)
})
.catch((error) => {
    console.error("Error:", error);
})
}
debugger
