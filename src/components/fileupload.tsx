import React, { useState } from "react";
import styled from "styled-components";
import UploadIcon from "../assets/upload_icon.png";

const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileUploadButton = styled.button`
  border-radius: 10px;
  border: 1px solid #8a8a8a;
  width: 90vw;
  height: 39px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

const FileUploadText = styled.span`
  color: #8a8a8a;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Filename = styled.text`
  color: #8a8a8a;
  /* font-family: Inter; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  max-width: 90vw;
  margin: 5px;
  display: flex;
  flex-direction:column;
`;

const FileUploadIcon = styled.img``;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = () => {
    const fileInput = document.getElementById(
      "fileUploadInput"
    ) as HTMLInputElement;
    fileInput.click(); // 숨겨진 input 클릭
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      if (selectedFiles.length + files.length <= 3) {
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
      } else {
        alert("최대 3개 파일까지 업로드 가능합니다.");
      }
    }
  };

  return (
    <FileUploadContainer>
      <Filename>
        {files.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </Filename>
      <FileUploadButton onClick={handleFileUpload}>
        <FileUploadText>파일 선택</FileUploadText>
        <FileUploadIcon src={UploadIcon} alt="upload_icon" />
      </FileUploadButton>
      <HiddenFileInput
        type="file"
        id="fileUploadInput"
        multiple
        onChange={handleChange}
      />
    </FileUploadContainer>
  );
};

export default FileUpload;
