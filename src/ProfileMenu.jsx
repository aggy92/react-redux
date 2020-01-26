import React from "react";
import { Menu, Dropdown, Button } from "antd";
import styled from "styled-components";

import * as themes from "./themes";

const ProfileButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileMenu = () => (
  <ProfileButton>
    <Dropdown
      trigger={["click"]}
      placement="bottomLeft"
      overlay={
        <Menu>
          <Menu.Item key="0">Profile</Menu.Item>
          <Menu.Item key="1">{`My albums (??)`}</Menu.Item>
          <Menu.Item key="2">Friends</Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">Log out</Menu.Item>
        </Menu>
      }
    >
      <Button
        shape="circle"
        icon="user"
        size="large"
        type={themes.outline.buttonType}
      />
    </Dropdown>
  </ProfileButton>
);

export default ProfileMenu;
