//Creating an Inmediately Invoked Function Expression
//Basically creatinga  function in 1st segment, and invoking it in the second ()()
(function () {
    $.connection.hub
        .start()                    //opens a connection to signalr hub
        .done(function () {         //successful connection, works do something...
            console.log("Connected to SignalR Hub");
            //invoke server side (Hub) announce method, pass in some message/data
            $.connection.myHub.server.announce("Connected!");
        })
        .fail(function () {         //failed connection
            alert("Failed connecting to SignalR Hub");
        })

    $.connection.myHub.client.announce = function (msg) {
        //alert(msg);
        $("#divWelcomeMsg").append(msg + "<br>");
    }
})()
