const getArgs = (args) => {
    const result = {};
    const [_executor, _file, ...rest] = args;

    rest.forEach((argument, index, array) => {
        if (argument.charAt(0) === '-') {
            if (index === array.length - 1) {
                result[argument.substring(1)] = true;
            } else if (array[index + 1].charAt(0) !== '-') {
                result[argument.substring(1)] = array[index + 1];
            } else {
                result[argument.substring(1)] = true;
            }

        }
    })

    return result;
};

export {
    getArgs,
};
