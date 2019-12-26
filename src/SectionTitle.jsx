import React from "react";
import { Typography } from "antd";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0 0 20px;
`;

const SectionTitle = () => (
  <Container>
    <Typography.Title level={4}>90s_lover's music (6 albums):</Typography.Title>
  </Container>
);

export default SectionTitle;
