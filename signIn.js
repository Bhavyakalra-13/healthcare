function redirect(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "MBVADevs" & password == "123456") {
        window.location.replace('./index.html');
    }
}

