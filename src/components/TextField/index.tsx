import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import InputMask from "react-input-mask";

export const Input = styled.input`
  padding: 0 8px;
  vertical-align: middle;
  border-radius: 2px;
  width: 100%;
  min-height: 36px;
  background-color: #ffffff;
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  border-radius: 8px;
  :focus {
    outline: none;
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }
`;
type Props = {
  label?: string;
  error?: any;
  id?: string;
  type?: string;
  placeholder?: string;
  mask?: string;
  register?: any;
} & InputHTMLAttributes<any>;

const TextField = ({
  label,
  error,
  id,
  type = "text",
  placeholder,
  register,
  mask,
  ...rest
}: Props) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {!mask ? (
        <Input type={type} placeholder={placeholder} {...register} {...rest} />
      ) : null}
      {mask ? (
        <InputMask
          mask={mask}
          placeholder={placeholder}
          {...register}
          {...rest}
        >
          {(inputProps: any) => <Input type={type} {...inputProps} />}
        </InputMask>
      ) : null}
      {error && <span style={{ fontSize: 12, color: "red" }}>{error}</span>}
    </div>
  );
};

export default TextField;
