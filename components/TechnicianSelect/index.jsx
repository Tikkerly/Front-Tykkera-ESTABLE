export default function TechnicianSelect({ technicians, handleChange }) {
    return (
        <div className='flex'>
            <h2>Buscar tickets por técnico:</h2>
            {technicians && <select onChange={handleChange}>
                <option disabled selected>Seleccione al técnico...</option>
                {technicians.map(technician => {
                    return (
                        <option
                            key={technician._id}
                            value={technician._id}>
                            {technician.username}
                        </option>
                    )
                })}
            </select>
            }
        </div>
    )
}