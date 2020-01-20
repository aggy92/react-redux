import React, { useEffect } from "react";
import styled from "styled-components";
import { Typography, Icon } from "antd";
import { connect } from "react-redux";

import ProfileMenu from "./ProfileMenu";
import AlbumsGrid from "./AlbumsGrid";
import SectionTitle from "./SectionTitle";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

const Header = styled.header`
  width: 100%;
  height: 90px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 10px 30px;
  top: 0;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
`;

const AlbumsSection = styled.section`
  padding: 90px 10px 40px 10px;
`;

const App = ({ fetchAlbums }) => {
  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);
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

const mapDispatch = ({ albums: { fetchAlbums } }) => ({
  fetchAlbums
});

export default connect(null, mapDispatch)(App);
