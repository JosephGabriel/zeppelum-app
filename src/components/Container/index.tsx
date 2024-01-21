import React from "react";
import { StatusBar, StatusBarStyle } from "expo-status-bar";

import { ContainerHolder } from "./styles";

interface Props {
  center?: boolean;
  padding?: number;
  statusBar?: StatusBarStyle;
  children?: React.ReactElement | JSX.Element[] | Element[];
}

const Container: React.FC<Props> = ({ children, statusBar, ...props }) => {
  return (
    <ContainerHolder {...props}>
      {children}
      <StatusBar style={statusBar ? statusBar : "dark"} />
    </ContainerHolder>
  );
};

export default Container;
