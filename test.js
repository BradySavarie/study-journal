function closeDiv(str) {
    let result = '';
    let tagCount = 1;

    // for each character of the string
    for (let i = 0; i < str.length; i++) {
        // if the character is an open angle bracket
        if (str[i] === '<') {
            // if the next  characters are div
            let tag = '';
            for (let j = 1; j < 4; j++) {
                tag += str[i + j];
            }
            if (tag === 'div') {
                if (tagCount === 1) {
                    result += str[i];
                    tagCount = 2;
                } else {
                    result += str[i] + '/';
                    tagCount = 1;
                }
            } else {
                result += str[i];
            }
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(
    closeDiv(
        '<div><p>this is a p tag</p><div><div><p>this is another p tag</p><div>'
    )
);
