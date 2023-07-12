export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export const lowerCaseFirstLetter = (string) => {
    return string.charAt(0).toLocaleLowerCase() + string.slice(1);
}

export const getLabelFromString = (string) => {
    if(!typeof string !=='string')
        return string;


    let array = string.split('_');
    array[0] = capitalizeFirstLetter(array[0]);
    return array.join(' ');
};

export const removeFromArrayByValue = (array, item) => {
    let index = array.indexOf(item);
    if (index > -1)
        array.splice(index, 1);
    return array;
}
