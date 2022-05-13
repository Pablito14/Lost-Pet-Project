
document.querySelector("#loginbtn").addEventListener("click",e=>{
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
            location.href="/dashboard"
        } else {
            alert("trumpet sound")
        }
    })
})


document.querySelector("#signup").addEventListener("click",e=>{
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#loginUsername").value,
        password:document.querySelector("#loginPassword").value,
        email:document.querySelector("#loginEmail").value,
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