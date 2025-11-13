const fs = require('fs');
const path = require('path'); 

const filePath = path.join(__dirname, 'Cidades.txt');

try {
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(data);
} catch (err) {
  console.error('Erro ao ler o arquivo:', err.message);
}