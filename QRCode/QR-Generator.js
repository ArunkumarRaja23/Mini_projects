function generateQRCode(){
    const text1 = document.getElementById("text").value;
    const qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = "";
    const urlregex=/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/

    if(text1.trim()!== "" && urlregex.test(text1)){
        new QRCode(qrCodeContainer, {text: text1, width:150, height:150,});
        qrCodeContainer.style.display ="flex";
        qrCodeContainer.style.justifyContent ="center";

    }
    else{
        alert("Enter valid Url")
    }
}