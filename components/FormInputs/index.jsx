export default function FormInputs({ placeholder, onChange, value, name, type }) {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required
            />
        </div>
    )
}