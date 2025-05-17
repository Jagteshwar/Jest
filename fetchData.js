const fetchData=(shouldFail = false) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(shouldFail){
                reject('error occured.')
            }else{
                resolve('chocolate')
            }
        }, 100)
    })
};

module.exports = fetchData;