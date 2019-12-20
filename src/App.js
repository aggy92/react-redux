import React from "react";
import styled from "styled-components";
import { Dropdown, Button, Menu, Card, Col, Row } from "antd";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
`;

const PostsContainer = styled.div`
  height: 80%;
`;

const Posts = styled.div``;

const Footer = styled.footer`
  width: 100%;
  height: 10%;
`;

const Post = () => (
  <Card
    hoverable
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Card.Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);

const App = () => {
  return (
    <Container>
      <Header>
        Title
        <Dropdown
          trigger={["click"]}
          placement="bottomLeft"
          overlay={
            <Menu>
              <Menu.Item key="0">Profile</Menu.Item>
              <Menu.Item key="1">My posts (number of posts)</Menu.Item>
              <Menu.Item key="2">Friends</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">Log out</Menu.Item>
            </Menu>
          }
        >
          <Button type="primary" shape="circle" icon="user" size="large" />
        </Dropdown>
      </Header>
      <PostsContainer>
        Posts of User name (number of posts):
        <Posts>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Post />
            </Col>
            <Col span={8}>
              <Post />
            </Col>
            <Col span={8}>
              <Post />
            </Col>
          </Row>
        </Posts>
      </PostsContainer>
      <Footer>Footer</Footer>
    </Container>
  );
};

export default App;
