//Creating an Inmediately Invoked Function Expression
//Basically creatinga  function in 1st segment, and invoking it in the second ()()

(function () {
    var theHub = $.connection.theHub;

    $("#btnClickMe").on("click", function () {
        //invokes server side (Hub) announce method, pass in some message/data
        theHub.server.announceToEverybody("Test message");
    });
    $("#btnGetServerDate").on("click", function () {
        theHub.server.getServerDateTime()   //returns a Promise object from the call to the server/hub method. Data from the Promise can be retrievied in the done & fail callback methdos
                     .done(function (data) {                     //callback function, function that's run after we get the data
                        writeToPage(data);
                     })
                     .fail(function (err) {
                        writeToPage(err);
                     })
    })
    var writeToPage = function (msg) {
        $("#divWelcomeMsg").append(msg + "<br>");
    }
    theHub.client.announce = function (msg) {
        writeToPage(msg);
    }

    //opens a connection to signalr hub. Does something on successfull or failure callback methods (done & fail respectively)
    $.connection.hub
                .start()                                         
                .done(function () { 
                    $.connection.hub.logging = true; //enable the built in logging. starts a console log for signalr         
                    $.connection.hub.log("Connected to Hub...");
                    writeToPage("Connected to Hub...")                
                })
                .fail(function () {         
                    writeToPage("Failed connecting to SignalR Hub");
                })
})()