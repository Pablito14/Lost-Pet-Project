// Initialize and add the map
function initMap() {
  // The location of volunteerPark
  const  volunteerPark = { lat:47.631381, lng: -122.316002 };

  // The map, centered at volunteerPark
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: volunteerPark,
  });
  // The marker, positioned at volunteerPark
  const marker = new google.maps.Marker({
    position: volunteerPark,
    map: map,
  });
}

window.initMap = initMap;