import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  padding: 20px 0 0 20px;
`;

const SectionTitle = ({ albumsCount }) => (
  <Container>
    <Typography.Title level={4}>
      {`My music (${albumsCount} albums):`}
    </Typography.Title>
  </Container>
);

const matchProps = ({ albums: { albums } }) => ({
  albumsCount: albums.length
});

export default connect(matchProps)(SectionTitle);
