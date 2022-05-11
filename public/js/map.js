// Initialize and add the map
//load lat and to the uluru



//load all information from our database
var myMap = document.querySelector("#map");
let myAnswers = " ";

 function initMap() {
    // The location of Uluru
    let uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    navigator.geolocation.getCurrentPosition((err)=>{
        uluru  = { lat:err.coords.latitude, lng: err.coords.longitude }
        
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
      });
    });
  }
//   console.log(navigator.geolocation.getCurrentPosition());
  window.initMap = initMap;