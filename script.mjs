// const myPromise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   console.log(random);
//   setTimeout(() => {
//     if (random >= 0.5) resolve("Alt gikk fint");
//     else reject("det gikk ikke så bra");
//   }, 4000);
// });

// myPromise
//   .then((result) => console.log(result))
//   .then(() => {
//     document.querySelector("body").style.background = "red";
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// document.querySelector("button").addEventListener("click", () => {});

// Lag kode for at knappen i html resolver en promisse.
// Du skal:
// 1. Lage et promise som sjekker om en variabel er sann eller usann
// 2. Skrive kode i event-listeneren som logisk endrer variabelen
// 3. Teste om koden din fungerer som antatt

let isResolved = false;

document.querySelector("button").addEventListener("click", () => {
  isResolved = true;
});

const buttonPromise = new Promise((resolve, reject) => {
  let i = 0;
  const myInterval = setInterval(() => {
    if (isResolved) {
      resolve("Everything is good!");
      clearInterval(myInterval);
    }
    if (i > 33) {
      reject("Everything is sad :'(");
      clearInterval(myInterval);
    }
    i++;
    console.log(i);
  }, 300);
});

buttonPromise
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
