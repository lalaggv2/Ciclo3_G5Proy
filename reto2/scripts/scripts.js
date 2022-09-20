function peticionGet() {
//FUNCTION GET
    $.ajax({
        url: 'https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
        type: 'GET',
        dataType: 'json',

        success: function(clientes) {
            let cl=clientes.items;
            $('#listaClientes').empty();
            for (i=0; i<cl.length; i++) {
                $()

            }
        }


    })

}

function guardarCliente() {
let idCliente= $("#idCliente").val();
let nombreCliente = $("#nombreCliente").val();
let mailCliente = $("#mailCliente").val();
let edad = $("#edadCliente").val();

let data = {
    id:idCliente,
    name: nombreCliente,
    email: mailCliente,
    age: edad
}

$.ajax({
url: 'https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
type: 'POST',
dataType: 'json',
contentType: 
data: dataToSend,

})

}

