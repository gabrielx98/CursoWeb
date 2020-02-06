const [a] = [10]
console.log(a)
console.log(typeof a)

const [n1, , n3, , n5, , n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
console.log(typeof n1)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
console.log(typeof nota)