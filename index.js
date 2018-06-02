function  do_something(lat,long){
console.log("lat="+lat);
console.log("long="+long);

}

navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});

document.getElementById("demo").innerHTML = "Hello JavaScript!";
