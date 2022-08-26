const fs = require('fs');
const random = require('random-name')

SECONDS = 3;

setInterval(() => writeNewLine(), SECONDS * 1000);

const writeNewLine = () => {
  const content = `Presentando a ${random()}...\n`;

  fs.appendFile('./presentaciones.txt', content, err => {
    if (err) {
      console.error(err);
    }
  });
}
