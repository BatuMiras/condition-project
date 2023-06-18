function myFunction() {
    let name = document.getElementById ("nameInfo").value ;
    
    let text;
    if (isNaN(name)) {
        text = "Teşekkürler :)";
    }
    else {
        text = "Rakam Girilemez.";
    }
    document.getElementById ("info").innerHTML = text;
}