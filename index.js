const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;


// const options = {
//     method: 'GET',
//     url: 'https://programming-memes-images.p.rapidapi.com/v1/memes',
//     headers: {
//         'X-RapidAPI-Key': 'ef75754912msh197e010aa946b76p182927jsn3ffdd832791c',
//         'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
//     }
// };

const jokes = async (apiUrl, host) => {
    try {
        const response = await axios.request({
            method: 'GET',
            url: apiUrl,
            headers: {
                'X-RapidAPI-Key': 'ef75754912msh197e010aa946b76p182927jsn3ffdd832791c',
                'X-RapidAPI-Host': host
            }
        });
        // console.log("data", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

app.get("/getjokes", async (req, res) => {

    const result = await jokes("https://programming-memes-images.p.rapidapi.com/v1/memes", 'programming-memes-images.p.rapidapi.com');
    const result2 = await jokes("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com")

    const result1img = result.map((e) => {
        return e.image;
    })
    // const result2jokes = result.map((e) => {
    //     return e.value
    // })

    res.json({
        "img": result1img,
         "joke" : result2.value
    })

})

app.listen(port, () => {
    console.log("Server is up and running at :", port);
})