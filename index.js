var latt;
var longg;

function  do_something(lat,long){
console.log("lat no131="+lat);
console.log("long="+long);

   latt =lat;
  longg =  long;
  console.log("latt="+latt);
  console.log("longg="+longg);
  
}

navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
 
});

document.getElementById("demo").innerHTML = "Hello JavaScript!";
document.getElementById("lat").innerHTML = latt;
document.getElementById("long").innerHTML = longg;
