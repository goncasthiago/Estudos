axios.get('https://api.github.com/users/goncasthiago')
.then((response) => {
    console.log(response)
}).catch((error) => {
    console.warn(error)
})