var imageUrl

//CLOUDINARY UPLOAD
const petName = document.querySelector("#petName")
const petDescription = document.querySelector("#petDescription")
const animalChoice = document.querySelector("#animalChoice")
const statusEl = document.querySelector("#status")
const breed = document.querySelector("#breed")
const color = document.querySelector("#color")
const lastLocation = document.querySelector("#lastLocation")
const lastTime = document.querySelector("#lastTime")


const form = document.querySelector('#upload_form');
form.addEventListener('submit', async (e) => {
    e.preventDefault()

    console.log('submitted')
    const file = document.querySelector("[type=file]").files[0];
    console.log(file)

    const preset = "pyi4eiaa"
    const url = "https://api.cloudinary.com/v1_1/daxlpyuij/image/upload/"
    const formData = new FormData()
    formData.append('file', file)
    formData.append("upload_preset", preset)

    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(res => {
            return res.json()

        })
        .then((data) => {
            imageUrl = data.secure_url
            var animalChoiceText = animalChoice.options[animalChoice.selectedIndex].text;
            var statusElText = statusEl.options[statusEl.selectedIndex].text;
            let isMissing
            if (statusElText === "Missing") {
                isMissing = true
            } else {
                isMissing = false
            }
            fetch('/api/pets', {
                method: 'POST',
                body: JSON.stringify({
                    name: petName.value,
                    petDescription: petDescription.value,
                    currentStatus: isMissing,
                    animal: animalChoiceText,
                    breed: breed.value,
                    color: color.value,
                    lastLocation: lastLocation.value,
                    lastTime: lastTime.value,
                    picture: imageUrl
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((data) => {
                console.log(data)
            })
        })

        .catch(err => console.error(err));
})

// const buttonEl = document.querySelector("#btn")
// buttonEl.addEventListener('click', async (e) => {
//         e.preventDefault()
//         console.log("I have been clicked")
// })



//CREATE PET FUNCTION
//upon submitting create pet form, post new pet to database.
//Pet.create({name: 'catboi', species: 'dog', picture: imageUrl})

//WHEREVER U WANT TO DISPLAY PET (probably on home route, user route, etc) [on a seperate js file]
//create h2 element for pet name, h3 element for species, and img element for picture
//img.src = pet.picture <img src="https://cloudinary.com/upload/agdsf456sdf6465">