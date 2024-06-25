import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

interface DrawerComponentProps {
  drawerOpen: boolean;
  drawerClose: () => void;
}

const DrawerComponent = ({ drawerOpen, drawerClose }: DrawerComponentProps) => {
  return (
    <>
      <Content>
        {/* <Button title='Click!' onPress={toggleDrawer}></Button> */}
      </Content>

      {drawerOpen && (
        <Drawer>
          <TouchableOpacity onPress={drawerClose}>
            <AntDesign name="close" size={20} color="black" />
          </TouchableOpacity>
          <Text>Drawer Content</Text>
        </Drawer>
      )}
    </>
  );
};

const Content = styled.View``;

const Drawer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: #ffffff;
  padding: 20px;
  border-right-width: 1px;
  border-color: #cccccc;
`;

export default DrawerComponent;
