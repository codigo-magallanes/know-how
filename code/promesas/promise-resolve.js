const obj = {}

const cero = {
    cero: "cero"
}

Promise.resolve(obj)
    .then(data => {
        const obj = { ...data }
        obj['uno'] = 'uno'
        return obj
    })
    .then(obj => {
        obj['dos'] = 'dos'
        return obj
    })
    .then(obj => {
        console.log('then: ',obj) // {cero: "cero", uno: "uno", dos: "dos"}
        return obj
    })
    .finally(console.log('finally: ',obj)) // { cero: "cero"}

console.log({obj}) // { obj: {cero: "cero"}}

setTimeout(() => {
    obj["uno"] = "uno"
    obj["dos"] = "dos"
    obj["tres"] = "tres"
}, 2000)

setTimeout(() => {
    console.log(obj) // { cero: "cero"}
}, 5000)
/*
setTimeout(() => {
    Promise.resolve(obj)
        .then(data => {
            //const obj = { ...data }
            obj['uno'] = 'uno'
            return obj
        })
        .then(obj => {
            obj['dos'] = 'dos'
            return obj
        })
        .then(obj => console.log(obj)) // {cero: "cero", uno: "uno", dos: "dos"}
        .finally(console.log('finally2: ',obj))
    }, 2000)
*/
