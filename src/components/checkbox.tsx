import React from "react";
import styled from "styled-components";

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 4px;
  margin-bottom: 20px;
  align-items: center;
`;
const CheckBoxText = styled.text`
  display: flex;
  align-items: center;
  color: #000;
  /* font-family: Inter; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

interface CheckBoxProps {
  category: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  category,
  isChecked,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  return (
    <CheckBoxContainer>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
      </label>
      <CheckBoxText>{category}</CheckBoxText>
    </CheckBoxContainer>
  );
};
export default CheckBox;
