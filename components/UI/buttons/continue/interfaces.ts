import { PaddingProps } from "../../../glogalInterfaces/interfaces";

export interface ContinueButtonProps extends PaddingProps {
    title: string;
    disabled?: boolean;
    onPress: () => void;
  }