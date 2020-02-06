import React from "react";
import {Menu, Dropdown, Button} from "antd";
import styled from "styled-components";
import {connect} from "react-redux";

import * as themes from "./themes";

const ProfileButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileMenu = (props) => (
    <ProfileButton>
        <Dropdown
            trigger={["click"]}
            placement="bottomLeft"
            overlay={
                <Menu>
                    <Menu.Item key="0">Profile</Menu.Item>
                    <Menu.Item key="1">Albums {props.length}</Menu.Item>
                    <Menu.Item key="2">Friends</Menu.Item>
                    <Menu.Divider/>
                    <Menu.Item key="3">Log out</Menu.Item>
                </Menu>
            }
        >
            <Button
                shape="circle"
                icon="user"
                size="large"
                type={themes[props.theme].buttonType}
            />
        </Dropdown>
    </ProfileButton>
);

const mapProps = state => ({
    theme: state.appSettings.theme,
    length: state.albums.albumsList.length
});

export default connect(mapProps)(ProfileMenu);
