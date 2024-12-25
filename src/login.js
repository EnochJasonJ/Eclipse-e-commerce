const form = document.getElementById("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    const username = document.getElementById("Name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedname = localStorage.getItem('username')
    const storedmail = localStorage.getItem('email')
    const storedpassword = localStorage.getItem('password')

    if(username == storedname && email == storedmail && password == storedpassword){
        console.log("Login successful!");
        alert("Login successful!");
        window.location.href = "home.html";
    }
    else{
        console.log("invalid Credentials!");
        alert("invalid Credentials!");
    }
    
})