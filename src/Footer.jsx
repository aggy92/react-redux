import React from "react";
import styled from "styled-components";
import { Typography, Radio } from "antd";
import { connect } from "react-redux";

import * as themes from "./themes";

const FooterContainer = styled.footer`
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  z-index: 1;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.09);
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Footer = ({ theme, onThemeChanged }) => (
  <FooterContainer theme={theme}>
    <Typography.Text>Copyright © rdrezner 2020</Typography.Text>
    <Radio.Group
      value={theme}
      onChange={e => onThemeChanged(e.target.value)}
      size="small"
      buttonStyle={themes[theme].buttonStyle}
    >
      <Radio.Button value="outline">Outline</Radio.Button>
      <Radio.Button value="solid">Solid</Radio.Button>
    </Radio.Group>
  </FooterContainer>
);

const mapProps = ({ appSettings: { theme } }) => ({
  theme
});

const mapDispatch = ({ appSettings: { setTheme } }) => ({
  onThemeChanged: setTheme
});

export default connect(mapProps, mapDispatch)(Footer);
