import React from "react";
import styled from "styled-components";

const TextBoxContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: start;
`;
const TextInput = styled.input`
  border: 1px solid #8a8a8a;
  border-radius: 10px;
  width: 85vw;
  height: 34px;
  padding-left: 10px;
  font-size: 12px;
  flex-shrink: 0;
`;

interface TextBoxProps {
  hinttext: string;
}

const TextBox: React.FC<TextBoxProps> = ({ hinttext }) => {
  return (
    <TextBoxContainer>
      <TextInput type="text" placeholder={hinttext} />
    </TextBoxContainer>
  );
};
export default TextBox;
