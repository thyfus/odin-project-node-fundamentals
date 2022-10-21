const { response } = require('express');

const express = require('express');

const app = express();

const {readFile} = require('fs');

app.get('/', (request, response) => {
    
    readFile('./main.html', 'utf8', (err, html) => {

        if (err) {
            response.status(500).send('sorry, server error')
        }

        response.send(html)

    })

});

app.listen(process.env.PORT || 3000, () => console.log("Meme available on http://localhost:3000"))
