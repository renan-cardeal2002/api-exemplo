import app from "./app";

app.listen(3333, "0.0.0.0", () => {
  console.log("listeng");
});

// caso nao der certo fazer dentro de uma funcao, exemplo:

// function main() {
//   try {
//     app.listen(3333, "0.0.0.0", () => {
//       console.log("listenig");
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
// main();
