import { memo } from "react";
import { useTabs } from "./Tabs";

export type PanelProps = React.PropsWithChildren<{
  label: string;
}>

const Component: React.FC<PanelProps> = props => {
  const { activeTab } = useTabs();
  return activeTab === props.label ? <div>{props.children}</div> : null;
};

export const Panel = memo(Component);