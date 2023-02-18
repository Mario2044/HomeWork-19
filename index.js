function sayHello(...names) {
    if (names.length > 1) {     
        console.log(`Hello guys, ${names.join(", ")}!`);
    } else {
        console.log(`Hello ${names[0]}!`);
    }
  }

sayHello("Petro");
sayHello("Petro", "Ivan", "Olga");