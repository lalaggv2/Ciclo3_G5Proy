function leerCliente() {


}

function guardarCliente() {
let idCliente= $("#idCliente").val();
let nombreCliente = $("#nombreCliente").val();
let mailCliente = $("#mailCliente").val();
let edad = $("#edadCliente").val();

let data = {

}

$.ajax({
url: 'https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
type: 'POST',
dataType: 'json',
contentType: 
data: dataToSend,

})

}