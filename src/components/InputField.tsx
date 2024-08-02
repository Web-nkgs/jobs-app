type Props = {
    title: string,
    inputName: string,
    inputPlaceholder: string
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) 
    => void
}

const InputField = ({ title, inputName, inputPlaceholder, handleInputChange }: Props) => {
    return (
        <div className="field-container">
            <label>{title}</label>
            <input
                name={inputName}
                placeholder={inputPlaceholder}
                onChange={(e) => { handleInputChange(e) }} />
        </div>
    )
}

export default InputField
