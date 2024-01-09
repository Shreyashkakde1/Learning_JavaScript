let imgBox = document.querySelector('#img-box')
let qrImage = document.querySelector('#qrImage')
let qrText = document.querySelector('#qrText')
let messageBox = document.querySelector('#messagee')

function generateQr() {

   if(qrText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
    imgBox.classList.add("show-img")
   }else{
        messageBox.innerHTML = "Please enter a text or a URL"
        setTimeout(() => {
            messageBox.innerHTML = ""
        }, 2000);
   }

}
