# Device_Reporter_practice

EJERCICIO PRÁCTICO: app web que muestra información sobre el dispositivo que está ejecutando la página.

Se presenta un proyecto que utiliza el framework de desarrollo Apache Cordova para crear una app que muestra información diversa en relación con el dispositivo que la está ejecutando.

Platforms:

  o	Browser.

  o	Android.

  o	iOS.

A continuación, se detallan los aspectos más relevantes de la aplicación:

    1.	Batería: de forma fija muestra información sobre la batería (nivel actual de carga y si se está cargando o descargando y si el dispositivo cambia           de estado, se actualiza automáticamente).

    2.	Geolocalización: incluye un botón que, tras ser pulsado, muestra la ubicación del dispositivo (latitud-longitud). Se integra un API de mapas               (OpenStreetMap).

    3.	Vibración: contiene 2 botones que interactúan con el vibrador de dispositivo. El primero lo hace vibrar durante 3 segundos y el segundo durante             medio segundo, para 1 segundo y de nuevo vibra otros 2 segundos y para.

    4.	Guarda información sobre el dispositivo en un array cada 10 segundos y la envía a un servidor externo (sólo incluye simulación de este envío).

$ cordova build ios

$ cordova run ios

$ cordova build android

$ cordova run android

$ cordova build browser

$ cordova run browser
