var imageUrl

//CLOUDINARY UPLOAD
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
            fetch('/api/pets', {
                method: 'POST',
                body: JSON.stringify({
                    name: "Fluffy",
                    petDescription: "is a dog",
                    currentStatus: true,
                    animal: "dog",
                    breed: "Lab",
                    color: "brown",
                    lastLocation: "address",
                    lastTime: 11,
                    picture: imageUrl
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((data) => {
                console.log(data)
            })
        })

        .catch(err => console.error(err));
})


//CREATE PET FUNCTION
//upon submitting create pet form, post new pet to database.
//Pet.create({name: 'catboi', species: 'dog', picture: imageUrl})

//WHEREVER U WANT TO DISPLAY PET (probably on home route, user route, etc) [on a seperate js file]
//create h2 element for pet name, h3 element for species, and img element for picture
//img.src = pet.picture <img src="https://cloudinary.com/upload/agdsf456sdf6465">