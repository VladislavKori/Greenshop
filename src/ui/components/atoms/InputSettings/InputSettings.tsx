import './style.css'

interface IInputSettingsProps {
  inputTitle: string;
  inputType: string;
  isImportant: boolean;
}

function InputSettings(props: IInputSettingsProps) {
  const { inputTitle, inputType, isImportant } = props;
  
  return (
    <div className="accoutnDetail__input-container">
      <h2 className="accountDetail__input-title">
        {inputTitle}
        {isImportant ?
          (<span className="accountDetail__important-field">*</span>)
          :
          null}
      </h2>
      <input className="accoutnDetail__input" type={inputType} />
    </div>
  )
}

export default InputSettings;
