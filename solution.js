function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

function listToObject(array) {
  let newObject = {};
  for (var i = 0; i < array.length; i++) {
    newObject[array[i].name] = array[i].value;
  }
  return newObject;
}

function objectToList(obj) {
  let result = Object.entries(obj).map(([name, value]) => ({ name, value }));
  return result;
}

module.exports.add = add;
module.exports.listToObject = listToObject;
module.exports.objectToList = objectToList;
