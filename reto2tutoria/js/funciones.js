//Metodos para cliente
const api = "https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client";

class Hotel {
  static traerCliente() {
  $.ajax(api, {
    type: "GET", 
    contentType: "application/json",
    dataType: "JSON",
    crossDomain: true,
    success: function(respuesta){
    console.log(respuesta);
    },
    error: function(xhr, error){
        console.log(error)
    },
  })
}
//funcion post
static crearCliente() {
    let datos = {
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
let dataToSend=JSON.stringify(datos);

$.ajax(api, {
    type:"POST",
    data:data,
    dataType:"json",
    success:function(respuesta){
        id:$("#id").val();
        name:$("#name").val();
        email:$("#email").val();
        age:$("#age").val();
        get();
        alert("Guardado")
    }
})

}
}

