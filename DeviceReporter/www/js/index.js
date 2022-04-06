/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready


    //BATTERY:

    var statusdiv;

    var estadoHTML = function(info){
        var s = "<p><br/><br/>";
        s += "Level: " + info.level.toFixed(0) + "%"; //toFixed() limita el número de decimales a los introducidos por parámetro.
        s += "<br/>";
        if(info.isPlugged == true){
            s += "Charging..."; //Si está cargando la batería.
            document.getElementById("img").innerHTML='<img src="img/battery_discharging.png" id="img"/>';
        }else{
            s += "Discharging..."; //Si no está cargando la batería.
            document.getElementById("img").innerHTML='<img src="img/battery_charging.png" id="img"/>';
        }
        s += "</p>";

      statusdiv.innerHTML = s;
    };

    var estadoBat = function(info) {
      estadoHTML(info);
    };


    //LOCATION:

    var deviceLocation;
    var lat;
    var long;
    var enlace;

    function getPosition() {
        var options = {
           enableHighAccuracy: true,
           maximumAge: 3600000
        }
        var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
     
        function onSuccess(position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            loc = "<p>Latitude: " + lat + "</br></br>";
            loc += "Longitude: " + long + "</br>";
            loc += "</p>";

            deviceLocation.innerHTML = loc;
            
            map = "https://www.openstreetmap.org/export/embed.html?bbox=-23.796386718750004%2C34.488447837809304%2C2.3510742187500004%2C45.120052841530544&amp;layer=mapnik&amp;marker=";
            map += lat;
            map += "%2C";
            map += long;

            enlace = document.getElementById("mapLink");
            enlace.src = map;
        };
     
        function onError(error) {
           alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
        }
    }

    
    //VIBRATION:
    function vibration(){
        var time = 3000; //Vibrará durante 3 segundos (3000 milisegundos).
        navigator.vibrate(time);
    }
     
    function vibrationPattern(){
        var pattern = [500, 1000, 2000]; //vibra medio segundo, para 1 segundo, vibra 2 segundos y para.
        navigator.vibrate(pattern);
    }


    //ARRAY INFORMATION:

    //Posición del array:
    var arrayInfo;

    var arrayInformation = function(info){
        //Array:
        var array = [];

        //Contenido de cada posición del array:
        var a = "<p>Timestamp: " + position.timestamp + "</br>";
        a += "Device UUID: " + device.uuid + '</br>';
        a += "Level: " + info.level.toFixed(0) + "%";
        a += "Charging: " + info.isPlugged;
        a += "Position: " + "</br>";
        a += "Latitude: " + position.coords.latitude + "</br>"
        a += "Longitude: " + position.coords.longitude + "</br>";
        a += "</p>";

        arrayInfo.innerHTML = a;
        array.push(arrayInfo);  //Poner aqui el request con un post a una url (la que sea)

        //Se envía a un servidor:
        var req = new XMLHttpRequest();
        req.open('POST', "server", true);
        req.send(array);
    };
    
    var intervalInformation = function(info) {
        var interval = setInterval(arrayInformation(info), 10000); //setInterval() permite ejecutar de forma repetitiva la función arrayInformation() cada 10 segundos.
    };


    //DEVICE READY:

    var onDeviceReady = function() {
        //Battery listener:
        window.addEventListener("batterystatus", estadoBat, false);;
        //Location listener:
        document.getElementById("location").addEventListener("click", getPosition);
        //Vibration listener:
        document.getElementById("vibration").addEventListener("click", vibration);
        document.getElementById("vibrationPattern").addEventListener("click", vibrationPattern);
        //Array Information:
        window.addEventListener("load", intervalInformation, false);
    };

    function init() {
        document.addEventListener("deviceready", onDeviceReady, true);
        //Battery:
        statusdiv = document.getElementById("battery");
        //Location:
        deviceLocation = document.getElementById("location");  
        //Maps API:
        
    }