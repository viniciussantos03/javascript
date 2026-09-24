//const corredor1 = {
  //  nome: 'Max Verstappen',
  //  equipe: 'Red Bull Racing',
   // idade: 28,
   // correr: function() {
   //     console.log('Vruuuuuuum')
    //},
//}

//const corredor2 = {
  //  nome: 'Lando Norris',
 //   equipe: 'McLaren',
 //   idade: 26,
 //   correr: function() {
 //       console.log('Vruuuuuuum')
 //   },
//}

//const corredor3 = {
  //  nome: 'Lewis Hamilton',
  //  equipe: 'Ferrari',
  //  idade: 41,
  //  correr: function() {
  //      console.log('Vruuuuuuum')
    //},
//}

//const corredor4 = {
 //   nome: 'George Russell',
 //   equipe: 'Mercedes',
  //  idade: 28,
 //   correr: function() {
 //       console.log('Vruuuuuuum')
 //   },
//}

//const corredor5 = {
 //   nome: 'Fernando Alonso',
 //   equipe: 'Aston Martin',
 //   idade: 45,
 //   correr: function() {
 //       console.log('Vruuuuuuum')

//    },
//}

// Class

// class pilotoFormula1 {
 //    nome = ''
 //    equipe = ''
 //    idade = 0
// 
 //    correr() {
 //        console.log('Vruuuuuuum!')
 //    }
// }

// const corredor1 = new pilotoFormula1()

// corredor1.nome = 'Max Verstappen'
// corredor1.equipe = 'Red Bull Racing'
// corredor1.idade = 28

class pilotoFormula1 {
    constructor(nomeDoPiloto, equipeDoPiloto, idadeDoPiloto) {
        this.nome = nomeDoPiloto
        this.equipe = equipeDoPiloto
        this.idade = idadeDoPiloto
    }

    correr() {
        console.log('Vruuuuuuum!')
        console.log(`${this.nome} está correndo!`)
    }
}

const corredor1 = new pilotoFormula1('Max Verstappen', 'Red Bull Racing', 28)

const corredor2 = new pilotoFormula1('Max Verstappen', 'Red Bull Racing', 28)

const corredor3 = new pilotoFormula1('Max Verstappen', 'Red Bull Racing', 28)

const corredor4 = new pilotoFormula1('Max Verstappen', 'Red Bull Racing', 28)

const corredor5 = new pilotoFormula1('Max Verstappen', 'Red Bull Racing', 28)

corredor5.correr()