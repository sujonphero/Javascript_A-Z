// ...Rest
const es6 = (...more) => {
    for (let i = 0; i< more.length; i++ ) {
        const elementEs6 = more[i]
        console.log(elementEs6)
    }
}
es6(44, 55, 66, 77);

// Explain : ...rest parameter means when you don,t know, how many arguments send. thats case you use ...rest perameter. this perameter has naming convention.