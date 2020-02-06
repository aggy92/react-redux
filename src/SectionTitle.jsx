import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import {connect} from "react-redux";


const Container = styled.div`
  padding: 20px 0 0 20px;
`;

const SectionTitle = (props) => (
  <Container>
    <Typography.Title level={4}>My music ({props.length} albums):</Typography.Title>
  </Container>
);

const mapProps = state => ({
    length: state.albums.albumsList.length
})

export default connect(mapProps)(SectionTitle);
