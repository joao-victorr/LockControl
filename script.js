

const tokken = "ncBvWmB7EwrKpZJJioGfmd7n"

// function tranformBytes(filePath) {

//     // Lê o conteúdo do arquivo como um buffer
//     const buffer = fs.readFileSync(filePath);

//   // Converte o buffer para um array de bytes (Uint8Array)
//     const byteArray = new Uint8Array(buffer);

//   // Retorna o array de bytes
//     return byteArray;

// };


// /*
// function imageToBase64(filePath) {
//     // Verifica se o arquivo existe
//     if (!fs.existsSync(filePath)) {
//       console.error(`O arquivo ${filePath} não foi encontrado.`);
//       return null;
//     }
  
//     // Lê o conteúdo do arquivo como um buffer
//     const buffer = fs.readFileSync(filePath);
  
//     // Converte o buffer para uma string Base64
//     const base64String = Buffer.from(buffer).toString('base64');
  
//     // Retorna a string Base64
//     return base64String;
// }



// async function listAcess() {

//         fetch("http://192.168.1.25/load_objects.fcgi?session=" + tokken, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "object": "users"
//             })
//         })
//         .then((res) => {
//             return data = res.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
// }

// async function createAcess() {
//     fetch("http://192.168.1.25/create_objects.fcgi?session=" + tokken, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "object": "users",
//             "values": [{"registration": "0123", "name": "joao teste3", "password": ""}]
//         })
//     })
//   .then(res => res.json())
//   .then((data) => {
//     console.log(data);
//   })
// }


// async function getPhoto() {


//     fetch("http://192.168.1.25/user_get_image.fcgi?user_id=274&get_timestamp=0&session=" + tokken)
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data);
//     })


// };
// */






const button = document.getElementById("button");
const inputFile = document.getElementById("file")

let file = " ";

button.addEventListener("click", () => {

    file = inputFile.files[0];
    console.log(file);

    uploadFile(inputFile);
    // uploadPhoto(file)

});


/******************for base 64 *****************************/
async function uploadFile(inputElement) {
    let file = inputElement.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
        console.log(reader.result);
        // uploadPhoto(reader.result)
      
      /******************* for Binary ***********************/
    // let data=(reader.result).split(',')[1];
    // let binaryBlob = atob(data);
    // console.log(binaryBlob);
    // uploadPhoto(reader.result)
    // // uploadPhoto(binaryBlob)
    }
    reader.readAsDataURL(file);
    // uploadPhoto(reader.result)
    
    

  }


async function uploadPhoto(imageBinary) {

    // const imageBytes = tranformBytes("assets/teste.bin");
    // blob.toString(imageBytes);
    // console.log(imageBytes);

    // const imagebase64 = imageToBase64("assets/teste.jpg");
    // console.log(typeof imagebase64);


    // const pathFile = path.join(__dirname, "assets", "assets/teste.jpg");
    // console.log(pathFile);


    const timestamp = Date.now();
    console.log(timestamp);

    fetch("http://192.168.1.25/user_set_image_list.fcgi?session=" + tokken, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            "match": false,
            "user_images": [
                {
                    "user_id": 274,
                    "timestamp": 1628727478,
                    "image": imageBinary
                },
                {
                    "user_id": 235,
                    "timestamp": 1628727478,
                    "image": imageBinary
                }
            ]
        })
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data);
    })


}


// uploadPhoto();