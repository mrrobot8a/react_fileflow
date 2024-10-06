import { useState } from "react";
import './inputField.css';

interface InputFieldProps {
  type: string;
  placeholder: string;
  icon: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value: string | any;
  error?: string;
  touched?: boolean;
}

const InputField = ({ type, placeholder, icon, onChange, value, name, error, touched, onBlur }: InputFieldProps) => {
  // State to toggle password visibility
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <>
      <div className="input-wrapper">
        <i className="material-symbols-rounded">{icon}</i>
        <input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={isPasswordShown ? 'text' : type}
          placeholder={placeholder}
          className="input-field"
          name={name}
          style={{ borderColor: error && touched ? 'red' : '' }}
          required
        />
        {type === 'password' && (
          <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-rounded eye-icon">
            {isPasswordShown ? 'visibility' : 'visibility_off'}
          </i>
        )}
        {/* Mostrar error solo si el campo ha sido tocado */}
        {touched && error && <span className="error-message">{error}</span>}
      </div>
    </>
  );
};

export default InputField;
