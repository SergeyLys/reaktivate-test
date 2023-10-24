import React from 'react';
import { Tab, TabProps } from './Tab';
import { Panel, PanelProps } from './Panel';

type TabsContextType = {
  activeTab: string;
  setActiveTab: (label: string) => void;
}

type TabsComposition = {
  Tab: React.FC<TabProps>;
  Panel: React.FC<PanelProps>;
}

const TabsContext = React.createContext<TabsContextType | null>(null);

const Tabs: React.FC<React.PropsWithChildren> & TabsComposition = props => {
  const [activeTab, setActiveTab] = React.useState('all');

  const memoizedContextValue = React.useMemo(
    () => ({
      activeTab,
      setActiveTab,
    }),
    [activeTab, setActiveTab],
  );

  return (
    <TabsContext.Provider value={memoizedContextValue}>
      {props.children}
    </TabsContext.Provider>
  );
};


export const useTabs = (): TabsContextType => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};

Tabs.Tab = Tab;
Tabs.Panel = Panel;

export { Tabs };
