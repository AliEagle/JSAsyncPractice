const somthingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!!')
        } else {
            reject('Upss!!!')
        }
    })
}

somthingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))

const somthingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else {
            const error = new Error('Ouch!!!!!')
            reject(error)
        }
    })
}

somthingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))

Promise.all([somthingWillHappen(), somthingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => console.error(err))