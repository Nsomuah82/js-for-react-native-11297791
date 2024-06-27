// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

module.exports = { createUserProfiles };
