const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class mascota {
  constructor(name, hambre, aburrimiento, sueno) {
    this.name = name;
    this.hambre = hambre;
    this.aburrimiento = aburrimiento; 
    this.sueno = sueno;
  }
}

rl.question('¿Cómo se va a llamar tu tamagochi uwu? ', (name) => {
  fs.writeFile('nombre.txt', name, (error) => {
    if (error) {
      console.log("error");
    }
  });

  let tamagochi = new mascota(name, 50, 30, 50);

  fs.writeFile('estado.txt', `  ${tamagochi.hambre}, ${tamagochi.aburrimiento}, ${tamagochi.sueno} `, (error) => {
    if (error){
      console.log("error");
    }
  }

)
  console.log(`tu tamagochi se llama, ${tamagochi.name }!`);
  console.log(`Estado inicial: hambre=${tamagochi.hambre}, aburrimiento=${tamagochi.aburrimiento}, sueño=${tamagochi.sueno}\n`);

 
  function interactuar() {
    rl.question('¿Qué quieres hacer con tu tamagochi? ("alimentar", "dormir", "jugar", "finalizar") ', (action) => {
      if (action === "alimentar") {
        
        
        tamagochi.hambre = tamagochi.hambre +1 ; 
        fs.writeFile('estado.txt', `${tamagochi.hambre}, aburrimiento=${tamagochi.aburrimiento}, sueño=${tamagochi.sueno}\n`, (error) => {
          if (error) {
            console.log( "error");
          }
        }
      
      
      )
        console.log("tu tamagochi esta comiendo :) ");

      } else if (action === "dormir") {
         tamagochi.sueno = tamagochi.sueno +1 ; 
        fs.writeFile('estado.txt', `${tamagochi.hambre}, aburrimiento=${tamagochi.aburrimiento}, sueño=${tamagochi.sueno}\n`, (error) => {
          if (error) {
            console.log( "error");
          }
        }
      
      
      )
        
        console.log("tu tamagochi esta durmiendo :) ");

      } else if (action === "jugar") {

         tamagochi.aburrimiento = tamagochi.aburrimiento +1 ; 
        fs.writeFile('estado.txt', `${tamagochi.hambre}, aburrimiento=${tamagochi.aburrimiento}, sueño=${tamagochi.sueno}\n`, (error) => {
          if (error) {
            console.log( "error");
          }
        }
      
      
      )

        console.log("estas jugando con tu tamagochi :) ");



      } else if (action === "finalizar") {
       

        rl.close();
        return;
      } else {
        console.log("acción no válida");
      }

      interactuar(); 
    });
  }

  interactuar(); 
});

