import { memo } from "react";
import { useTabs } from "./Tabs";

export type TabProps = React.PropsWithChildren<{
  label: string;
}>

const Component: React.FC<TabProps> = props => {
  const { setActiveTab } = useTabs();
  return (
    <button onClick={() => setActiveTab(props.label)}>
      {props.children}
    </button>
  );
};

export const Tab = memo(Component);
