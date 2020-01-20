import React from "react";
import { Card, Button } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";

import * as themes from "./themes";

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Album = ({ data: { id, title, artist, year }, theme }) => (
  <Card
    hoverable
    style={{
      margin: "20px"
    }}
    cover={
      <img
        alt="album cover"
        src={process.env.PUBLIC_URL + `/albums/${id}.jpg`}
      />
    }
  >
    <CardBody>
      <Card.Meta title={title} description={`${artist}, ${year}`} />
      <Button
        size="large"
        shape="circle"
        icon="caret-right"
        style={{ padding: "0 0 2px 2px" }}
        type={themes[theme].buttonType}
      />
    </CardBody>
  </Card>
);

const mapProps = ({ appSettings: { theme } }) => ({
  theme
});

export default connect(mapProps)(Album);
