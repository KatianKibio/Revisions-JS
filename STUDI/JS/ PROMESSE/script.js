//THEN CATCH FINALLY
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let age = Math.floor(Math.random()*70)
        if(age >= 18) {
            resolve({age,status:'Tu es majeur.'})
        }
            reject({age, status:'Tu es mineur. Tu peux pas voté.'})
       
    }, 1000)
})

myPromise
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("- - - Finally - - -");
    })


//ALL ----------------------------------------------------
startChrono()

const firstNote = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Première note')
    }, 1000)
})

const secondNote = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Seconde note')
    }, 3000)
})

Promise
    .all([firstNote, secondNote])
    .then((response) => {
        console.log('Toutes les promesses sont chargées.')
        console.log(response)
    })

//RACE ----------------------------------------------------
const abc = new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, 5000)
})

const def = new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, 7000)
})

Promise
    .race([abc, def])
    .then((response) => {
        console.log('La plus rapide est chargée.')
        console.log(response)
        stopChrono()
    })