function collectClient() {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var phoneInput = document.getElementById("phone").value;
    var messageInput = document.getElementById("message").value;

    var url = "https://guarded-river-01766.herokuapp.com/api/users/clientNotification";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        alert("We have received your request. We will be in touch with you in less than a business day!");
        $('#feedbackModal').modal('hide');
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";

    }};
    messageInput = nameInput+"--"+emailInput+"--"+phoneInput+"--"+messageInput;
    xhr.send(JSON.stringify({phone: "5408509937", message: messageInput}))  
}
//name email phone message