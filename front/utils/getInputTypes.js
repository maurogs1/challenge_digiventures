export const getInputTypes = (type) => {
    if( type === 'text' || type === 'password' || type === 'email' ){
        return 'true';
    }
    return false;
}

export const getvalidInputTypes = (type, isWithCheckbox = false) => {
    if(isWithCheckbox)
        return type === 'text' || type === 'password' || type === 'email' || type === 'checkbox';
    return type === 'text' || type === 'password' || type === 'email';
}

