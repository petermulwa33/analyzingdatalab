const datejs = require('datejs');

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };
    args.forEach(userArray => {
        if (Array.isArray(userArray)) {
            combinedObject.users = [...combinedObject.users, ...userArray];
        }
    });

    const today = new Date();
    combinedObject.merge_date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
module.exports = { combineUsers };
