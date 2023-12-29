import fs from 'fs';
import fetch from 'node-fetch';


const pathFile = "assets/teste.png";

function base64_encode(fileName) {
    let bitmap = fs.readFileSync(fileName);
    return bitmap
    // return Buffer.from(bitmap).toString('base64');
}

async function uploadImage(pathFile) {
    const imageBinary = base64_encode(pathFile);

    try {
        const response = await fetch("http://192.168.1.25/user_set_image.fcgi?user_id=274&match=0&timestamp=1624997578&session=jLCpEZIRxZQTFi2pOPOOIfhG", {
            method: "POST",
            headers: {
                'Content-Type': 'application/octet-stream'
            },
            body: imageBinary
            // body: Buffer.from(imageBinary, 'base64')
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erro na requisição:', error.message);
    }
}

uploadImage(pathFile);
