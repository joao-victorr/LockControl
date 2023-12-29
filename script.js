

const inputFile = document.querySelector('#inputFile');
const button = document.querySelector('#button');
const inputUserId = document.querySelector('#userId');


const ipAddress = {
    loja: "192.168.1.25",
    fabrica: "192.168.201.205"
}

const session = "6stLkeuFKXxCSQf4lS41WYST"


async function uploadImage(user) {

    const url = `http://${ipAddress.loja}/user_set_image.fcgi?user_id=${user.id}&match=0&timestamp=1624997578&session=${session}`
    

    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/octet-stream'
        },
        body: user.imageBinary
    })
    .then(response => response.json())
    .then(data => console.log(data));


}


button.addEventListener('click', async () => {

    const user = {
        id: parseInt(inputUserId.value),
        imageBinary: inputFile.files[0]
    }

    uploadImage(user);



});