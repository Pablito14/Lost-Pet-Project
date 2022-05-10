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

