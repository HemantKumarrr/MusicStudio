function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        // message : document.getElementById("phoneNumber").value,
        message : document.getElementById("message").value,
    };
    const serviceID = "service_6o7zb6s";
    const tempID = "template_qams8fk";
    
    emailjs.send(serviceID, tempID, params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            // document.getElementById("phoneNumber").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully");
    
        }
    )
    .catch((err)=> console.log(err));
}
