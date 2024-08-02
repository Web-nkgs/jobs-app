
type Props = {
    title: string,
    selectFieldName: string,
    options: string[],
    handleSelectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectFieldContainer = ({ title, selectFieldName, options, handleSelectionChange }: Props) => {
    return (
        <div className="field-container">
            <label>{title}</label>
            <select name={selectFieldName} onChange={(e) => handleSelectionChange(e)}>
                {options.map((option) =>
                    <option
                        key={option}
                        value={option}>
                        {option}
                    </option>)}
            </select>
        </div>
    )
}

export default SelectFieldContainer
