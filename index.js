const fs = require('fs');
const https = require('https');

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, breed) => {
  if (err) return console.log(err);
  if (breed) {
    console.log(breed);
    fetch(`https://dog.ceo/api/breed/${breed.trim()}/images/random`).then(
      (res) => {
        console.log('respons: ',res);
        console.log('json: ', res.json);
        res.json().then((data) => {
          console.log('data: ', data);
          console.log('image: ', data.message);
        });
      }
    );
  }
});
