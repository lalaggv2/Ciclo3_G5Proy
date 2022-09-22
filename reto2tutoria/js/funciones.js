//Metodos para cliente
const api = "https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client";

class Hotel {
    static traerCliente() {
        $.ajax(api, {
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            crossDomain: true,
            success: function (respuesta) {
                console.log(respuesta);
                // $("#resultadoCliente").append(respuesta.items[0].name);
                $("#resultadoCliente").html("");
                for (let i = 0; i < respuesta.items.length; i++) {
                    let fila = `<tr>
                        <td>${respuesta.items[i].id}</td>
                        <td>${respuesta.items[i].name}</td>
                        <td>${respuesta.items[i].email}</td>
                        <td>${respuesta.items[i].age}</td>
                        <td><button onclick="Hotel.eliminarCliente()">Eliminar</button></td>
                    </tr>`;
                    $("#resultadoCliente").append(fila);

                }
            },
            error: function (xhr, error) {
                console.log(error)
            },
        })
    }
    //funcion post
    static crearCliente() {
        console.log("entro a la funcion")
        let datos = {
            id: $("#id").val(),
            name: $("#name").val(),
            email: $("#email").val(),
            age: $("#age").val(),
        };
        let dataToSend = JSON.stringify(datos);
        console.log(dataToSend);
        $.ajax({
            url: "https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
            type: "POST",
            data: dataToSend,
            dataType: "json",
            contentType: "application/json",

            complete: function (respuesta) {
                if (respuesta.status == 201) {
                    Hotel.traerCliente();
                    $("#id").val("");
                    $("#name").val("");
                    $("#email").val("");
                    $("#age").val("");
                    alert("Guardado")
                } else {
                    alert("Error, no se puedo agregar")
                }
            }

        })
    }

    //funcion put
    static actualizarCliente() {
        console.log("entro a la funcion")
        let datos = {
            id: $("#id").val(),
            name: $("#name").val(),
            email: $("#email").val(),
            age: $("#age").val(),
        };
        let dataToSend = JSON.stringify(datos);
        console.log(dataToSend);
        $.ajax({
            url: "https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
            type: "PUT",
            data: dataToSend,
            dataType: "json",
            contentType: "application/json",

            complete: function (respuesta) {
                if (respuesta.status == 201) {
                    Hotel.traerCliente();
                    $("#id").val("");
                    $("#name").val("");
                    $("#email").val("");
                    $("#age").val("");
                    alert("Actualizado")
                } else {
                    alert("Error, no se puedo actualizar")
                }
            }

        })
    }

    //funcion delete
    static eliminarCliente() {
        console.log("entro a la funcion")
        let datos = {
            id: $("#id").val(),
            // name: $("#name").val(),
            //email: $("#email").val(),
            ///age: $("#age").val(),
        };
        let dataToSend = JSON.stringify(datos);
        console.log(dataToSend);
        $.ajax({
            url: "https://g02ae6c99368ff0-room.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
            type: "DELETE",
            data: dataToSend,
            dataType: "json",
            contentType: "application/json",

            complete: function (respuesta) {
                if (respuesta.status == 204) {
                    Hotel.traerCliente();
                    $("#id").val("");
                    $("#name").val("");
                    $("#email").val("");
                    $("#age").val("");
                    alert("Eliminado")
                } else {
                    alert("Error, no se puedo eliminar")
                }
            }

        })
    }
}

