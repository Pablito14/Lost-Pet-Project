console.log("login linked1")
document.querySelector("#login").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#loginUsername").value,
        password:document.querySelector("#loginPassword").value,
        email:document.querySelector("#loginEmail").value,
    }
    console.log(userObj)
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("logged in!")
        } else {
            alert("trumpet sound")
        }
    })
})


document.querySelector("#signup").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#signupUsername").value,
        password:document.querySelector("#signupPassword").value,
        email:document.querySelector("#signupEmail").value,
    }
    console.log(userObj)
    fetch("/api/users/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("logged in!")
        } else {
            alert("trumpet sound")
        }
    })
})