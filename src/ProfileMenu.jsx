import React from "react";
import { Menu, Dropdown, Button, Typography } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";

const ProfileButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileMenu = ({ user: { login, name } }) =>
  login && name ? (
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
      <Typography.Text strong>{`${name} (${login})`}</Typography.Text>
    </ProfileButton>
  ) : (
    null
  );

const matchProps = ({ user }) => ({ user });

export default connect(matchProps)(ProfileMenu);
