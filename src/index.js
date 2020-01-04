import app from './app';
import '@babel/polyfill';
// Para que compile bien el projecto 
// porque utilizamos un transcopilador
// ERROR
// regeneratorRunTime is not defined

async function main() {
  await app.listen(3000);

  console.log("Server On Port 4000");

}

main();