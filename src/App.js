import React from "react";
import styled from "styled-components";
import { Dropdown, Button, Menu, Card, Col, Row, Typography, Icon } from "antd";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 10px 30px;
  top: 0;
  background-color: white;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
`;

const PostsContainer = styled.div`
  margin-top: 90px;
  margin-bottom: 40px;
  padding: 10px;
  background-color: #fafafa;
`;

const Posts = styled.div``;

const Footer = styled.footer`
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  z-index: 1;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.09);
  background-color: white;
  padding: 10px;
`;

const ProfileButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.div`
  padding: 20px 0 0 20px;
`;

const Post = () => (
  <Card
    hoverable
    style={{
      margin: "20px"
    }}
    cover={
      <img alt="album cover" src={process.env.PUBLIC_URL + "/albums/001.jpg"} />
    }
  >
    <CardBody>
      <Card.Meta title="Superunknown" description="Soundgarden, 1994" />
      <Button
        size="large"
        shape="circle"
        icon="caret-right"
        style={{ padding: "0 0 2px 2px" }}
      />
    </CardBody>
  </Card>
);

const App = () => {
  return (
    <Container>
      <Header>
        <Typography.Title style={{ marginBottom: 0 }}>
          <Icon type="notification" /> MyJukebox ™
        </Typography.Title>
        <ProfileButton>
          <Dropdown
            trigger={["click"]}
            placement="bottomLeft"
            overlay={
              <Menu>
                <Menu.Item key="0">Profile</Menu.Item>
                <Menu.Item key="1">My albums (6)</Menu.Item>
                <Menu.Item key="2">Friends</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">Log out</Menu.Item>
              </Menu>
            }
          >
            <Button shape="circle" icon="user" size="large" />
          </Dropdown>
          <Typography.Text strong>rdrezner</Typography.Text>
        </ProfileButton>
      </Header>
      <PostsContainer>
        <SectionTitle>
          <Typography.Title level={4}>
            rdrezner's music (6 albums):
          </Typography.Title>
        </SectionTitle>
        <Posts>
          <Row gutter={[2, 2]}>
            <Col span={6}>
              <Post />
            </Col>
            <Col span={6}>
              <Post />
            </Col>
            <Col span={6}>
              <Post />
            </Col>
            <Col span={6}>
              <Post />
            </Col>
          </Row>
          <Row gutter={[2, 2]}>
            <Col span={6}>
              <Post />
            </Col>
            <Col span={6}>
              <Post />
            </Col>
            <Col span={6}>
              <Post />
            </Col>
            <Col span={6}>
              <Post />
            </Col>
          </Row>
        </Posts>
      </PostsContainer>
      <Footer>
        <Typography.Text>Copyright © rdrezner 2020</Typography.Text>
      </Footer>
    </Container>
  );
};

export default App;
