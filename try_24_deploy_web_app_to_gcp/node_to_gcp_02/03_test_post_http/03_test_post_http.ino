#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>

void setup() {

  Serial.begin(115200);                                  //Serial connection
  WiFi.begin("Mike", "mmmmm22222");   //WiFi connection

  while (WiFi.status() != WL_CONNECTED) {  //Wait for the WiFI connection completion

    delay(500);
    Serial.println("Waiting for connection");

  }

}

void loop() {

  if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status
    StaticJsonDocument<100> testDocument;
    testDocument["code"] = "a01";
    testDocument["sensorType"] = "Temperature";
    testDocument["value"] = 10;
    testDocument["date"] = 10;
    char buffer[100];

    serializeJson(testDocument, buffer);

    HTTPClient http;    //Declare object of class HTTPClient

    http.begin("http://deploy-test-01-277204.df.r.appspot.com/");      //Specify request destination
    http.addHeader("Content-Type", "application/json"); //Specify content-type header

    int httpCode = http.POST(buffer);   //Send the request
    String payload = http.getString();                  //Get the response payload

    Serial.println(httpCode);   //Print HTTP return code
    Serial.println(payload);    //Print request response payload

    http.end();  //Close connection

  }else{

    Serial.println("Error in WiFi connection");

  }

  delay(5000);  //Send a request every 30 seconds

}
