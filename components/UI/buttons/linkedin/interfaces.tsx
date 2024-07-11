import { ReactElement } from "react";
import { PaddingProps } from "../../../glogalInterfaces/interfaces";

export interface LinkedinButtonProps extends PaddingProps {
    title: string;
    icon?: ReactElement;
    disabled?: boolean;
    onPress: () => void;
  }