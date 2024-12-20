import React from 'react'

const FormField = ({ labelValue, placeholder, id, value, onChange, required=true}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="font-bold mb-1">{labelValue}</label>
            <input
                type="text"
                className="border rounded w-full px-2"
                placeholder={placeholder}
                name={id}
                id={id}
                required={required}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default FormField


// TODO 
// Replace individual labels and inputs with this in AddMugPage and EditMugDetailsPage
