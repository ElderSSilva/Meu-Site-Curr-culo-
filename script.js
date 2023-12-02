
const button1 = document.getElementById("btn1-1")

const modal1 = document.getElementById("btn1-2")

const buttonClose1 = document.getElementById("Close1")


button1.onclick = function (){
    modal1.showModal();
}



buttonClose1.onclick = function(){
    modal1.close()
}

