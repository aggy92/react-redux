import React from "react";
import { Row, Col, Spin } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";

import Album from "./Album";

const columnsCount = 4;

const SpinnerContainer = styled.div`
  padding-top: 100px;
  text-align: center;
`;

const AlbumsGrid = ({ albums, albumsLoaded }) => {
  const rowsCount = Math.floor((albums.length - 1) / columnsCount) + 1;
  const albumsDataGrid = [...new Array(rowsCount)].map(() => []);
  albums.forEach((a, index) => {
    const row = Math.floor(index / columnsCount);
    const col = index % columnsCount;
    albumsDataGrid[row][col] = a;
  });
  return albumsLoaded ? (
    <>
      {albumsDataGrid.map(row => (
        <Row key={row[0].id} type="flex" justify="start">
          {row.map(col => (
            <Col key={col.id} span={6}>
              <Album data={col} />
            </Col>
          ))}
        </Row>
      ))}
    </>
  ) : (
    <SpinnerContainer>
      <Spin size="large" />
    </SpinnerContainer>
  );
};

const mapProps = ({ albums: { albums, albumsLoaded } }) => ({
  albums,
  albumsLoaded
});

export default connect(mapProps)(AlbumsGrid);
