import axios from "axios";

const closureHandleSubmit = (route, payload, dispatch, action, setMessage, setLoading, router) => {
    return async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(route, payload);
            dispatch(action(response.data));
            router.push('/')
        } catch (error) {
            setLoading(false);
            setMessage('No se ha podido iniciar sesión. Revise si ha ingresado bien los campos o intente más tarde.')
        }
    }
}

export default closureHandleSubmit