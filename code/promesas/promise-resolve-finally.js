const obj = {}

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
        console.log('then: ',obj) // {uno: "uno", dos: "dos"}
        return obj
    })
    .finally(console.log('finally: ',obj)) // { }

console.log(obj) // {}
