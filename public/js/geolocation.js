// Initialize and add the map
//load lat and to the uluru

//load all information from our database
var myMap = document.querySelector("#map");
let myAnswers = " ";

 function initMap() {
    // The location of Uluru
    let uluru;
    let petData = []
    //create fech request to found all pet , grapp and put to the map
    fetch('/api/pets', {
      method: 'GET'
    }).then(res=>res.json()).then(data=>{
      // console.log(data)

      for (let i = 0; i < data.length; i++) {
        const pet = data[i]
        console.log(pet)
        var petName = pet.name;
        var petlati = pet.lastLocation.split(", ")[0].trim();
        var petlong = pet.lastLocation.split(", ")[1].trim();
        // console.log(petlati + "," + petlong)

        petData.push({name:petName, latitude:petlati, longitude:petlong})
      }
      //petData = [{ name:petsname, location: {lat:data.latitude, lng: data.longitude }}]
      // console.log(petData)
      
      
      //format petdata to look like {name:petsname,location:{lat:,lng:}} and push to petData array
    }).then(()=>{


    // The map, centered at Uluru
    navigator.geolocation.getCurrentPosition((err)=>{
      // console.log(err)
        uluru  = { lat:err.coords.latitude, lng: err.coords.longitude }
        // console.log(uluru)

        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13,
          center: uluru,
        });

        
        // The marker, positioned at Uluru
        //wrap below into for loop
        console.log(petData.length)
        for (let i = 0; i < petData.length; i++) {
          const pet = petData[i]
          console.log('-----')
          console.log(pet)
          let petLoc = {lat:Number(pet.latitude), lng:Number(pet.longitude)}
          console.log(petLoc)
          new google.maps.Marker({
            position: petLoc,
            map,
            title: pet.name,
        });
        }
    });
  })
  }
//   console.log(navigator.geolocation.getCurrentPosition());
  window.initMap = initMap;