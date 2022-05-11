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
            if (data.secure_url !== '') {
                const uploadedFileUrl = data.secure_url;
                localStorage.setItem('passportUrl', uploadedFileUrl);
            }
        })
        .catch(err => console.error(err));

})


//CREATE PET FUNCTION
//upon submitting create pet form, post new pet to database.
//Pet.create({name: 'catboi', species: 'dog', picture: imageUrl})

//WHEREVER U WANT TO DISPLAY PET (probably on home route, user route, etc) [on a seperate js file]
//create h2 element for pet name, h3 element for species, and img element for picture
//img.src = pet.picture <img src="https://cloudinary.com/upload/agdsf456sdf6465">