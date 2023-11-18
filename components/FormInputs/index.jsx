export default function FormInputs({ placeholder, onChange, value, name, type }) {
    return (
        <div>
            <input
                className="text-left text-Az4 border border-Be rounded px-8 py-2 w-full focus:outline-none focus:border-Az4 font-regular avant-garde-regular"
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