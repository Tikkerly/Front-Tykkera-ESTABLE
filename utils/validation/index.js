const validation = (type, values) => {
  const errors = {};
  switch (type) {
    case "register":
      if (!values.username) {
        errors.username = "El campo es obligatorio";
      }
      if (!values.email) {
        errors.email = "El campo es obligatorio";
      }
      /*  if (!values.img) {
                errors.img = 'El campo es obligatorio';
             } */
      if (!values.phone) {
        errors.phone = "El campo es obligatorio";
      }
      if (!values.address) {
        errors.address = "El campo es obligatorio";
      }
      if (!values.document) {
        errors.document = "El campo es obligatorio";
      }
      if (!values.documentType) {
        errors.documentType = "El campo es obligatorio";
      }
      if (!values.personType) {
        errors.personType = "El campo es obligatorio";
      }
      if (!values.password) {
        errors.password = "El campo es obligatorio";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "El campo es obligatorio";
      }
      if (!values.company) {
        errors.company = "El campo es obligatorio";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Las contraseñas no coinciden";
      }
      return errors;

    case "finalClient":
      if (!values.username) {
        errors.username = "El campo es obligatorio";
      }
      if (!values.email) {
        errors.email = "El campo es obligatorio";
      }
      if (!values.phone) {
        errors.phone = "El campo es obligatorio";
      }
      if (!values.address) {
        errors.address = "El campo es obligatorio";
      }
      if (!values.document) {
        errors.document = "El campo es obligatorio";
      }
      if (!values.documentType) {
        errors.documentType = "El campo es obligatorio";
      }
      if (!values.serviceClient_id) {
        errors.serviceClient_id = "El campo es obligatorio";
      }
      return errors;

    case "serviceAgent":
      if (!values.username) {
        errors.username = "El campo es obligatorio";
      }
      if (!values.email) {
        errors.email = "El campo es obligatorio";
      }
      if (!values.phone) {
        errors.phone = "El campo es obligatorio";
      }
      if (!values.document) {
        errors.document = "El campo es obligatorio";
      }
      if (!values.documentType) {
        errors.documentType = "El campo es obligatorio";
      }
      if (!values.password) {
        errors.password = "El campo es obligatorio";
      }
      return errors;
    case "technician":
      if (!values.username) {
        errors.username = "El campo es obligatorio";
      }
      if (!values.email) {
        errors.email = "El campo es obligatorio";
      }
      if (!values.phone) {
        errors.phone = "El campo es obligatorio";
      }
      if (!values.document) {
        errors.document = "El campo es obligatorio";
      }
      if (!values.address) {
        errors.address = "El campo es obligatorio";
      }
      if (!values.documentType) {
        errors.documentType = "El campo es obligatorio";
      }
      if (!values.password) {
        errors.password = "El campo es obligatorio";
      }
      if (!values.paymentMethods) {
        errors.paymentMethods = "El campo es obligatorio";
      }
      if (!values.accountNumber) {
        errors.accountNumber = "El campo es obligatorio";
      }
      if (!values.serviceClient_id) {
        errors.serviceClient_id = "El campo es obligatorio";
      }
      if (!values.serviceTypes) {
        errors.serviceTypes = "El campo es obligatorio";
      }
      return errors;
  }
};

export default validation;
