import React from "react";
import styled from "styled-components";
import { Typography, Icon } from "antd";

import ProfileMenu from "./ProfileMenu";
import AlbumsGrid from "./AlbumsGrid";
import SectionTitle from "./SectionTitle";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 10px 30px;
  top: 0;
  background-color: white;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
`;

const AlbumsSection = styled.section`
  padding: 90px 10px 40px 10px;
  background-color: #fafafa;
`;

const Footer = styled.footer`
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  z-index: 1;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.09);
  background-color: white;
  padding: 10px;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Typography.Title style={{ marginBottom: 0 }}>
          <Icon type="notification" /> MyJukebox ™
        </Typography.Title>
        <ProfileMenu />
      </Header>
      <AlbumsSection>
        <SectionTitle />
        <AlbumsGrid />
      </AlbumsSection>
      <Footer>
        <Typography.Text>Copyright © rdrezner 2020</Typography.Text>
      </Footer>
    </Container>
  );
};

export default App;
