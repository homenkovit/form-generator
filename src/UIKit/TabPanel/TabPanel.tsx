import { FC } from 'react';

interface TabPanelProps {
  tab: string;
  selectedTab: string;
  className?: string;
}

export const TabPanel: FC<TabPanelProps> = ({
  tab,
  selectedTab,
  children,
  className,
}) => (
  <div
    id={`${tab}-panel`}
    role="tabpanel"
    tabIndex={0}
    className={className}
    aria-labelledby={`${tab}-tab`}
    hidden={tab !== selectedTab}
  >
    {children}
  </div>
);
