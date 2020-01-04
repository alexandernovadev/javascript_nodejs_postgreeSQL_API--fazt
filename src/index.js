import app from './app';

async function main() {
  await app.listen(4000);

  console.log("Server On Port 4000");

}

main();