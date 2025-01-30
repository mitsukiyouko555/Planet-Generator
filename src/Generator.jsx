
export default function Generator(){

//Planet Name generator
// - Pick a Random Number between 1 and 9
// - based on that number, generate a name that contains letters and numbers.
let min = 2
let max = 9
let noOfCharas = Math.floor(Math.random()*(max-min) + min)

let vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]

let consanants =["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z", "0", "1", "2", "3", "4" , "5", "6", "7", "8", "9"]

let planetName = []

let i = 0

while (i <= noOfCharas){
    // console.log(i + 1)
    //if when looping, i is a consanant, pick a random consanant. or number, else pick a vowel or number
    i%2 == 0 ? planetName.push(vowels[Math.floor(Math.random() * vowels.length)]) : planetName.push(consanants[Math.floor(Math.random() * consanants.length)])

    i++
}
planetName = planetName.join(",")
planetName = String(planetName).replaceAll(",", "");


// - Number of Moons
// 	- A Number between 0-100 (Though if there are more moons, each are smaller in size.. whereas if there is just 1 then the moon is bigger)


// - Number of Suns
// 	- A Number between 0-100 (Though if there are more suns, each are smaller and moon like in size.. whereas if there is just 1 then the sun is bigger)
	  
// - Element
// 	- Earth-like / Well Rounded / Combination of things
// 	- Mainly Hot / Fiery
// 	- Mainly Cold / Icy
// 	- Mainly Watery
// 	- Mainly Plants
// 	- Mainly Crystal
// 	- Mainly Mineral

let element = ["Earth-Like", "Mainly Hot/Fiery", "Mainly Cold/Icy", "Mainly Watery", "Mainly Crystal" , "Mainly Mineral", "Mainly Plants", "Abstract/Other"]

let selectedElement = element[Math.floor(Math.random()*element.length)]

// - Shape
// 	- Sphere
// 	- Diamond
// 	- Triangle
// 	- Cube
// 	- Polygon
// 	- Connected Pieces of Rock / Land
// 	- Unusual Shape (Spiky, Blobbity, etc)

let shape = ["Sphere", "Diamond", "Triangle", "Cube", "Polygon" , "Connected Pieces of Rock / Land", "Unusual Shape (Spiky, Blobbity, etc)"]

let selectShape = shape[Math.floor(Math.random() * shape.length)]

    return(
        <>
            <p>Planet Name: {planetName}</p>
            <p>Number of Suns: {Math.floor(Math.random()*100)}</p>
            <p>Number of Moons: {Math.floor(Math.random()*100)}</p>
            <p>Element: {selectedElement}</p>
            <p>Shape: {selectShape}</p>
            <br></br>
        </>
    )
}