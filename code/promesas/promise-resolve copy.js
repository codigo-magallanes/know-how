const obj = {
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
    .then(obj => console.log(obj)) // {cero: "cero", uno: "uno", dos: "dos"}
    .finally(console.log('finally1: ',obj))

console.log(obj) // { cero: "cero"}

setTimeout(
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
    , 2000)

console.log(obj) // { cero: "cero"}