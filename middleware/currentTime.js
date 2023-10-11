function timeNow(req, res, next){
    
    console.log(`req received at ${Date.now()}`);
    next();
}

module.exports = timeNow;