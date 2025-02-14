function makeCoffee(isMachineOn) {
  return new Promise((resolve, reject) => {
    console.log("Starting the coffee machine...");

    setTimeout(() => {
      if (isMachineOn) {
        resolve("☕ KAHVI ON VALAMISTA!!!!!!");
      } else {
        reject("🚫 kahvi ei ole valmis :(. Käynnistä se päälle pliis!");
      }
    }, 2000); // Simulate 2 seconds to make coffee
  });
}
export { makeCoffee };
