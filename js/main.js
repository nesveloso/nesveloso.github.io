var light_on = false;


// Form email
function SendMail(event){
    event.preventDefault();

    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_u1ap0ne", "template_epusk69", params).then(function (res){
        alert("Mensagem enviada com sucesso!");
    });
}
