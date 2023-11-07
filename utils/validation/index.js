const validation = (type, values) => {
    const errors =  {};
    switch (type) {
        case "register":

            if (!values.username) {
                errors.username = 'El campo es obligatorio';
            }
            if (!values.email) {
                errors.email = 'El campo es obligatorio';
            }
            if (!values.password) {
                errors.password = 'El campo es obligatorio';
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = 'El campo es obligatorio';
            }
            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Las contraseñas no coinciden';
            } 
            return errors

    
        case 'login':
            if (!values.email) {
                errors.email = 'El campo es obligatorio';
            }
            break;
    
    }
}

export default validation