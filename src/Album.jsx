import React from "react";
import { Card, Button } from "antd";
import styled from "styled-components";

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Album = ({ data: { id, title, artist, year } }) => (
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
      />
    </CardBody>
  </Card>
);

export default Album;
