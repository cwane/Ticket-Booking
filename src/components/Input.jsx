import { useFormContext } from "react-hook-form"
import { findInputError } from './../utils/findInputError';
import { isFormInvalid } from './../utils/isFormInvalid';  

export const Input = ({ name, label, type, id, placeholder, validation }) => {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    const inputError = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputError);

    return (
        <div className="flex flex-col gap-2 grow-[2]">
            <p>
                <label htmlFor={id} className="text-base">
                    {label}
                </label>
            </p>
            <input
                style={{borderColor: isInvalid ? 'red' : '#6B737A'}}
                name={name}
                id={id}
                type={type}
                className="bg-[#1C1C24] border-[1px] rounded-lg border-[#252D3C] px-4 py-2"
                placeholder={placeholder}
                {...register(name, validation)}
            />
            { isInvalid && 
                <InputError
                    message={inputError.error.message}
                    key={inputError.error.message}
                />
            }
        </div>
    )
}

const InputError = ({message}) => {
    return (
        <p className="error-message" style={{color:'red', marginTop: '4px', marginLeft: '15px', fontSize: '12px'}}>
            {message}
        </p>
    )
}