  let producto ={
        nombre:"naranja",
        precio: 5
    }

    for(let propiedad in producto){
        console.log(propiedad + " = " + producto[propiedad])
    }

    let NP=['antonio', 'marta', 'pepe']
    for(let indice in NP){
        console.log(indice + " = " + NP[indice])
    }

    for (let persona of NP){
        console.log(persona)
        break
        continue
    }