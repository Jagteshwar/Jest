// function multiply(a, b){
//     return a*b;
// }

const multiply = require(".");

const fetchData=(shouldFail = false) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(shouldFail){
                reject('error occured.')
            }else{
                resolve()
            }
        }, 100)
    })
};

module.exports = multiply