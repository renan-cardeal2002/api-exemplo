let array_exemplo: any = [];
class Pessoa {
  nome;
  idade;
  sexo;

  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
}

array_exemplo.push(new Pessoa("Joao", 20, "F"));
array_exemplo.push(new Pessoa("Renan", 21, "M"));

function mapeando() {
  let retorno = array_exemplo.map((linha) => {
    // aqui voce pode manipular os seus dados

    return {
      nome: linha.nome,
    };
  });

  return retorno;
}

function filtrando() {
  let retorno = array_exemplo.filter((item) => {
    return item.idade == 21;
  });

  return retorno;
}

console.log(mapeando());
console.log(filtrando());
// foreach e igual o for(let x of array)
