const fs = require('fs/promises');
const https = require('https');

const getDogPic = async () => {
  try {
    const breed = await fs.readFile('./dog.txt', 'utf-8');
    if (breed) {
      console.log(`breed : ${breed.trim()}`);
      const res = await fetch(
        `https://dog.ceo/api/breed/${breed.trim()}/images/random`
      );
      const data = await res.json();
      console.log(`data: `, data);
      await fs.writeFile(`./dog-img.txt`, data.message);
      console.log(`image is saved to file`);
    }
  } catch (err) {
    console.log(err);
  }
};

getDogPic();
