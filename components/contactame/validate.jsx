const validate = (input) => {
    let errors = {};
  
    if (!input.email) {
      errors.email = "Debes ingresar un correo electrónico.";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "Ingresa un correo electrónico válido.";
      }
  
    if (input.nombre && input.nombre.length > 40) {
      errors.nombre = "El nombre no puede ser mayor a 40 caracteres.";
    } else if(!input.nombre){
        errors.nombre = "Debes ingresar un nombre.";
    }
  
    if (input.descripcion && input.descripcion.length > 300) {
      errors.descripcion = "La descripción no puede ser mayor a 300 caracteres.";
    }else if(!input.descripcion){
        errors.descripcion = "Debes ingresar una descripción.";
    }
  
    return errors;
  };

  export default validate;