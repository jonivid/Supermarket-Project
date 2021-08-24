let dataMap = new Map();

function get(key) {
    return dataMap.get(key);
}

function set(key, value) {
    dataMap.set(key, value);
}

function remove(key) {
    dataMap.delete(key)
}

function extractUserDataFromCache(request) {
    console.log(request);
    // let authorizationString = request.headers["authorization"];
    let token = request.substring("Bearer ".length);
    let userData = dataMap.get(token);
    return userData;
}
module.exports = {
    set,
    get,
    extractUserDataFromCache,
    remove
}


