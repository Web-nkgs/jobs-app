type Props = {
    title: string,
    inputName: string,
    inputPlaceholder: string
    handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) 
    => void
}

const TextAreaField = ({ title, inputName, inputPlaceholder, handleInputChange }: Props) => {
    return (
        <div className="field-container">
            <label>{title}</label>
            <textarea
                name={inputName}
                placeholder={inputPlaceholder}
                onChange={(e) => { handleInputChange(e) }} />
        </div>
    )
}

export default TextAreaField
