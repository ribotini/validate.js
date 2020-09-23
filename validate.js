const validateDNI = (dni) => {
    const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const nifRegExp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    const nieRegExp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    const str = dni.toString().toUpperCase();

    if(!nifRegExp.test(str) && !nieRegExp.test(str)) {
        console.log('DNI incorrecto');
    } else {
        const nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');

        const letter = str.substr(-1);
        const charIndex = parseInt(nie.substr(0, 8)) % 23;

        if(validChars.charAt(charIndex) === letter) {
            console.log('DNI válido');
        } 
    }
}

const validateEmail = (email) => {
    const emailRegEx = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(emailRegEx.test(email)) {
        console.log('Email válido');
    } else {
        console.log('Email incorrecto');
    }
}

const validateIBAN = (iban) => {
    const ibanRegEx = /[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/;

    if(ibanRegEx.test(iban)) {
        console.log('IBAN correcto');
    } else {
        console.log('IBAN incorrecto');
    }
}

const validateComplexPassword = (password) => {
    const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.[\W]).{8,}$/;

    if(passwordRegEx.test(password)) {
        console.log('Strength password');
    } else {
        console.log('Soft password');
    }
}

const validateUserName = (username) => {
    const usernameRegEx = /^[a-z0-9_-]{3-16}$/;

    if(usernameRegEx.test(username)) {
        console.log('Nombre de usuario incorrecto');
    } else {
        console.log('Nombre de usuario incorrecto');
    }
}

const validateURL = (url) => {
    const urlRegEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

    if(urlRegEx.test(url)) {
        console.log('URL válida');
    } else {
        console.log('URL inválida');
    }
}

const validateIP = (ip) => {
    const ipRegEx = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if(ipRegEx.test(ip)) {
        console.log('IP válida');
    } else {
        console.log('IP inválida');
    }
}

const validateVisa = (visa) => {
    const visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;

    if(visaRegEx.test(visa)) {
        console.log('Número de tarjeta correcto');
    } else {
        console.log('Número de tarjeta incorrecto');
    }
}

const validateMasterCard = (mastercard) => {
    const mastercardRegEx = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;

    if(mastercardRegEx.test(mastercard)) {
        console.log('Número de tarjeta correcto');
    } else {
        console.log('Número de tarjeta incorrecto');
    }
}

const validateHexadecimal = (hexadecimal) => {
    const hexadecimalRegEx = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
    
    if(hexadecimalRegEx.test(hexadecimal)) {
        console.log('Hexadecimal correctp');
    } else {
        console.log('Hexadecimal incorrecto');
    }
}