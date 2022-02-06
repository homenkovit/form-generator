import { FC, ReactElement, useEffect, useState } from 'react';
import { TabButton } from '@UIKit/TabButton';
import { TabList } from '@UIKit/TabList';
import { TabPanel } from '@UIKit/TabPanel';
import styles from './Tabs.module.scss';
import classNames from 'classnames';

export interface Tab {
  label: string;
  panel: ReactElement;
}

interface TabsProps {
  tabs: Tab[];
  selected?: string;
  className?: string;
}

export const Tabs: FC<TabsProps> = ({ tabs, selected, className }) => {
  const [selectedTab, setSelectedTab] = useState<string>(selected || tabs[0].label);

  useEffect(() => {
    if (selected) {
      setSelectedTab(selected);
    }
  }, [selected]);

  const selectTab = (label: string) => {
    setSelectedTab(label);
  };

  return (
    <div className={classNames(styles.component, className)}>
      <TabList onChange={selectTab} selected={selectedTab}>
        {tabs.map(({ label }) => (
          <TabButton key={label} label={label} className={styles.tab} />
        ))}
      </TabList>
      {tabs.map(({ label, panel }) => (
        <TabPanel
          key={label}
          tab={label}
          selectedTab={selectedTab}
          className={styles.panel}
        >
          {panel}
        </TabPanel>
      ))}
    </div>
  );
};
