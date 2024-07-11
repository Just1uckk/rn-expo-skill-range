import { PaddingProps } from "../../glogalInterfaces/interfaces";
import { AlignItemsType, DisplayType, FlexDirectionType, JustifyContentType } from "../../types/types";

export interface ContainerProps extends PaddingProps {
    children?: any;
    jc?: JustifyContentType;
    ai?: AlignItemsType;
    fd?: FlexDirectionType;
    display?: DisplayType;
  }