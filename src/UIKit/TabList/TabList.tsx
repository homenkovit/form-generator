import {
  Children,
  cloneElement,
  createRef,
  FC,
  isValidElement,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { TabButtonProps } from '@UIKit/TabButton';
import styles from './TabList.module.scss';
import classNames from 'classnames';

interface TabListProps {
  selected?: string;
  onChange?: (selectedTab: string) => void;
  className?: string;
}

export const TabList: FC<TabListProps> = ({
  selected,
  onChange,
  children,
  className,
}) => {
  const tabListRef = useRef<HTMLUListElement>(null);

  const tabRefs = useMemo(() => {
    return Children.map(children, () => createRef<HTMLButtonElement>());
  }, []);

  useEffect(() => {
    const tabList = tabListRef.current;
    let tabFocus = Children.toArray(children).findIndex((child) => ((child as ReactElement).props as TabButtonProps).label === selected);

    const onKeydown = (event: KeyboardEvent) => {
      if (tabRefs) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          tabRefs[tabFocus].current?.setAttribute('tabindex', '-1');

          if (event.key === 'ArrowRight') {
            tabFocus += 1;

            if (tabFocus >= tabRefs.length) {
              tabFocus = 0;
            }
          } else if (event.key === 'ArrowLeft') {
            tabFocus -= 1;

            if (tabFocus < 0) {
              tabFocus = tabRefs.length - 1;
            }
          }

          tabRefs[tabFocus].current?.setAttribute('tabindex', '0');
          tabRefs[tabFocus].current?.focus();
        }
      }
    };

    tabList?.addEventListener('keydown', onKeydown);

    return () => tabList?.removeEventListener('keydown', onKeydown);
  }, [tabListRef.current, tabRefs]);

  const onSelect = (tabLabel: string) => {
    if (onChange) {
      onChange(tabLabel);
    }
  };

  return (
    <ul
      ref={tabListRef}
      role="tablist"
      className={classNames(styles.list, className)}
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const { label } = child.props;
          return (
            <li key={label} className={styles.item}>
              {cloneElement(child, {
                ref: tabRefs && tabRefs[index],
                isSelected: selected === label,
                onSelect: () => onSelect(label),
              } as TabButtonProps)}
            </li>
          )
        }}
      )}
    </ul>
  );
};
