
const orcs = ["Sugbu","Yambul","Zalthu","Snaglak","Noogugh","Varbu","Podagog","Cukgilug","Xarpug","Jughragh","Murbol","Bashuk","Ugor","Mog","Ghak","Murob","Ulumpha","Ushug","Sharn","Dura","Raghat","Brokil","Pargu","Hibub","Jughog","Nurghed","Ditgurat","Durz","Kurdan","Bugdul","Sharamph","Homraz","Sharn","Murob","Oghash","Shagdub","Durgat","Atub","Bolar","Snak","Numhug","Sulmthu","Yakha","Urgran","Vrothu","Sakgu","Sahgigoth","Matuk","Rodagog","Ertguth","Sharn","Orbul","Durgat","Gashnakh","Kharzug","Arob","Dura","Garakh","Shufharz","Gul","Wegub","Eichelberbog","Wurgoth","Durzol","Wudhagh","Digdug","Zabub","Omogulg","Mugdul","Jokgagu","Borgakh","Bulfim","Arob","Durz","Bulfim","Snak","Atub","Bagrak","Snak","Yazgash","Bidgug","Slaugh","Farod","Hagu","Zunuguk","Bogrum","Oogorim","Unrugagh","Onugug","Omugug","Batul","Agrob","Dura","Gluronk","Rogbut","Durgat","Mog","Shadbak","Bula","Durgat"]

const start = []
const end = []
chances = [ [60, 99], [70, 99], [80, 99] ]

createParts()
function createParts() {
    orcs.forEach(word => {
        for(let length = 0; length < word.length - 2; length++) {
            length === 0 ? start.push(word.toLowerCase().slice(length, length + 3)) : end.push(word.toLowerCase().slice(length, length + 3))
        }
    })
    createName()
}

function createName() {
    let name = start[Math.floor(Math.random() * start.length)]
    let nameLength = 5
    let iter = 0
    let addMore = true
    while(addMore) {
        console.log(`CURRENT NAME - ${name}`)
        let addition = end[Math.floor(Math.random() * end.length)]
        iter == 2 ? addMore = false : addMore = randomChance(chances[iter])

        if(name.slice(name.length - 3, name.length) === addition) {
            console.log(`1`)
            name = name
        } else if(name.slice(name.length - 2, name.length) === addition.slice(0, 2)) {
            name += addition.slice(2)
            console.log(`2 - ${addition.slice(2)}`)
        } else if(name.slice(name.length - 1) === addition.slice(0, 1)) {
            name += addition.slice(1)
            console.log(`3 - ${addition.slice(1)}`)
        } else {
            name += addition
            if(name.length > nameLength) addMore = false
        }
        iter += 1
    }
    console.log(`result: ${name}`)
    console.log(`-----------------`)
    document.getElementById("name").innerText = name
    document.getElementById("avatar").src = `./img/orcs/orc_${Math.floor(Math.random() * (10 - 1 + 1) + 1)}.jpg`
}
function randomChance(borders) {
    const rand = (Math.random() * 100).toFixed(0)
    if(rand >= borders[0] && rand <= borders[1]) return true
    return false
}


const gen = document.getElementById("gen")
gen.addEventListener("click", () => {
    createParts()
})