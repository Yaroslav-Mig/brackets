module.exports = function check(str, bracketsConfig) {
    let tempStr = str;

    for (let strIndex = tempStr.length; strIndex >= 0; strIndex--) {
        for (let bracketIndex  = 0; bracketIndex < bracketsConfig.length; bracketIndex++) {
            if (tempStr[strIndex] === bracketsConfig[bracketIndex][0]) {
                tempStr = tempStr.replace(bracketsConfig[bracketIndex].join(''), '');
            }
        }
    }

    return tempStr.length === 0;
};
