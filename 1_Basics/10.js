const name="Ritish"
const repoCount=44
// old 
// console.log(name+ repoCount+ "value")
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName= new String('Ritish')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)
console.log(newString)


const anotherString= gameName.slice(-8,4)
console.log(anotherString)


const newStringone="       Ritish      "
console.log(newStringone.trim())
console.log(newStringone)

const url="https://automatic-potato-4j6prqw9wp5rh7x/"
console.log(url.replace("potato", "--%#4Ritish$@"))



console.log(url.includes('potato'))
console.log(url.includes('Ritish'))

const Example="Ritish---Kanojia---Games"
console.log(Example.split('---'))
