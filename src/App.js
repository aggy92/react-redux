import React from "react";
import styled from "styled-components";
import { Typography, Icon } from "antd";

import ProfileMenu from "./ProfileMenu";
import AlbumsGrid from "./AlbumsGrid";
import SectionTitle from "./SectionTitle";
import Footer from "./Footer";
import {useEffect} from "react";
import {connect} from "react-redux";

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

const App = ({onInit}) => {

  useEffect(() => {
    onInit();
  }, [onInit]);

  return(
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
)};

/*
const mapDispatch = dispatcher => ({
  onInit: dispatcher.albums.fetchedAlbums
});
*/

const mapDispatcher = ({albums: {fetchAlbums}}) => ({
  onInit: fetchAlbums,
});

export default connect(null, mapDispatcher)(App);
