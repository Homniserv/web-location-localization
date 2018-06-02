function  do_something(lat,long){
console.log("lat="+lat);
console.log("long="+long);

}
var latt;
var longg;
navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
  latt = position.coords.latitude;
  longg =  position.coords.longitude;
});

document.getElementById("demo").innerHTML = "Hello JavaScript!";
document.getElementById("lat").innerHTML = latt;
document.getElementById("long").innerHTML = longg;
