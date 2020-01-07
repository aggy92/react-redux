import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  padding: 20px 0 0 20px;
`;

const SectionTitle = ({ user: { login } }) =>
  login ? (
    <Container>
      <Typography.Title level={4}>
        {`${login}'s music (6 albums):`}
      </Typography.Title>
    </Container>
  ) : (
    null
  );

const matchProps = ({ user }) => ({ user });

export default connect(matchProps)(SectionTitle);
