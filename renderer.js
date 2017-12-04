// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var ladate=new Date()

var h=ladate.getHours();
if (h<10) {h = "0" + h}
var m=ladate.getMinutes();
if (m<10) {m = "0" + m}
var s=ladate.getSeconds();
if (s<10) {s = "0" + s}
document.write("Heure: ");
document.write(h+":"+m+":"+s)