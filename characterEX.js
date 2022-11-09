'use strict'

//Retornando todas as informações do personagem
const getInfo = async(id) => {
    const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`
    const response = await fetch(url);
    const listaPersonagem = await response.json();

    return listaPersonagem;
}
console.log(getInfo('3'))
export {
    getInfo
}

