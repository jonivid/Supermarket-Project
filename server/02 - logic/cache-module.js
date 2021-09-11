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
    let authorizationString = request.headers["authorization"];
    let token = authorizationString.substring("Bearer ".length);
    let userData = dataMap.get(token);
    console.log(userData);
    return userData;
}
module.exports = {
    set,
    get,
    extractUserDataFromCache,
    remove
}


