class Math{
    sum(a, b, callback){
        setTimeout(() => {
            callback(a + b);
        },0 )
    };
    multiply(a,b){
        return a * b;
    }
    print(req, res, a, b){
        res.load('index', a + b)
    }
}

module.exports = Math;