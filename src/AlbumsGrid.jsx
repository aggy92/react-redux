import React from "react";
import { Row, Col, Spin } from "antd";
import styled from "styled-components";
import {connect} from "react-redux"

import Album from "./Album";

const columnsCount = 4;

const SpinnerContainer = styled.div`
  padding-top: 100px;
  text-align: center;
`;

const AlbumsGrid = ({albums, albumsListLoaded}) => {
  const rowsCount = Math.floor((albums.length - 1) / columnsCount) + 1;
  const albumsDataGrid = [...new Array(rowsCount)].map(() => []);
  albums.forEach((a, index) => {
    const row = Math.floor(index / columnsCount);
    const col = index % columnsCount;
    albumsDataGrid[row][col] = a;
  });
  return albumsListLoaded ? (
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

const mapProps = state =>({
  albums: state.albums.albumsList,
  albumsListLoaded: state.albums.loaded
});

export default connect(mapProps)(AlbumsGrid);
