import React from "react";
import styled from "styled-components";

const LabelContainer = styled.div`
  background-color: #83bf5d;
  width: 100vw;
  height: 100px;
`;
const FooterDetail = styled.div`
  justify-content: center;
  background-color: black;
  width: 100vw;
  height: 66px;
  display: flex;
  flex-direction: column;
`;
const FooterText = styled.text`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const FooterCopyright = styled.text`
  margin-left: 20px;

  text-align: start;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Footer: React.FC = () => {
  return (
    <>
      <LabelContainer />
      <FooterDetail>
        <FooterText>
          <div style={{ marginRight: "12px" }}>개인정보처리방침</div>
          <div>이용약관</div>
        </FooterText>
        <FooterCopyright>
          Copyright 2024.TECH4GOOD All rights reserved.
        </FooterCopyright>
      </FooterDetail>
    </>
  );
};
export default Footer;
