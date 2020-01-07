import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  padding: 20px 0 0 20px;
`;

const SectionTitle = ({ user: { login }, albumsCount }) =>
  login ? (
    <Container>
      <Typography.Title level={4}>
        {`${login}'s music (${albumsCount} albums):`}
      </Typography.Title>
    </Container>
  ) : null;

const matchProps = ({ user, albums: { albums } }) => ({
  user,
  albumsCount: albums.length
});

export default connect(matchProps)(SectionTitle);
