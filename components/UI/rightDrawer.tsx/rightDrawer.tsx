import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, Pressable } from "react-native";
import styled from "styled-components/native";

import { DrawerComponentProps } from "./interfaces";

const DrawerComponent = ({ drawerOpen, drawerClose }: DrawerComponentProps) => {
  return (
    <>
      {drawerOpen && (
        <Drawer>
          <Pressable onPress={drawerClose}>
            <AntDesign name="close" size={20} color="black" />
          </Pressable>
          <Text>Drawer Content</Text>
        </Drawer>
      )}
    </>
  );
};

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
