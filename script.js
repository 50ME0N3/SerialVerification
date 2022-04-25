import { SerialPort } from "serialport";
var getPortsList = (callback) => {
    var portsList = [];

    SerialPort.list((err, ports) => {
        ports.forEach((port) => {
            portsList.push(port.comName);
        });

        callback(null, portsList);
    });
};

console.log(getPortsList);