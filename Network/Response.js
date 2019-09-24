exports.success = function (req, res, message, status) {
    
    res.status(status || 200).send(message);    
}

exports.error = function (req, res, message, status){
    
    res.status(status || 400).send(message);  
}   