

 // Crie um array que receba 5 itens e exiba no console.

let itens = [" samba", " jazz", " mpb", " funk", " pop"]

console.log(`estilos musicais ${itens}`)

                                                                                                                                               
// Utilize um método para adicionar um nome ao inicio do array.

let itens1 = [" samba", " jazz", " mpb", " funk", " pop"]
itens1.unshift("rock")

console.log(`adicionar outro estilo no inicio ${itens1}`)

// Utilize um método para remover o último nome do array.

let itens2 = [" samba", " jazz", " mpb", " funk", " pop"]
itens2.pop()

console.log(`retirar ultimo nome ${itens2}`)

// Utilize um método para adicionar dois nomes ao fim do array.

let itens3 = [" samba", " jazz", " mpb", " funk", " pop"]
itens2.push("reggae", "hip hop")

console.log(`estilos musicais mais 2 itens ${itens3}`)

// Utilize um método para remover o primeiro nome do array.

let itens4 = [" samba", " jazz", " mpb", " funk", " pop"]

console.log(`estilos musicais sem o primeiro nome ${itens4}`)

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

let numeros = [7,5,6,3,8,9,2,1,4]
numeros.sort()

console.log(`numeros crescentes ${numeros}`)