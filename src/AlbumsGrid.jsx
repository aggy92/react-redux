import React from "react";
import { Row, Col } from "antd";

import Album from "./Album";

const columnsCount = 4;

const albums = [
  {
    id: 1,
    artist: "Soundgarden",
    title: "Superunknown",
    year: "1994"
  },
  {
    id: 2,
    artist: "Red Hot Chili Peppers",
    title: "Californication",
    year: "1999"
  },
  {
    id: 3,
    artist: "Rage Against The Machine",
    album: "Rage Against The Machine",
    year: "1992"
  },
  {
    id: 4,
    artist: "Nirvana",
    album: "Nevermind",
    year: "1991"
  },
  {
    id: 5,
    artist: "Alice In Chains",
    album: "Unplugged",
    year: "1996"
  },
  {
    id: 6,
    artist: "The Roots",
    album: "Things Fall Apart",
    year: "1999"
  }
];

const AlbumsGrid = () => {
  const rowsCount = Math.floor((albums.length - 1) / columnsCount) + 1;
  const albumsDataGrid = [...new Array(rowsCount)].map(() => []);
  albums.forEach((a, index) => {
    const row = Math.floor(index / columnsCount);
    const col = index % columnsCount;
    albumsDataGrid[row][col] = a;
  });
  return (
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
  );
};

export default AlbumsGrid;
