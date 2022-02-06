import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './TabButton.module.scss';

export interface TabButtonProps {
  label: string;
  isSelected?: boolean;
  onSelect?: () => void;
  ref?: ForwardedRef<HTMLButtonElement>;
  className?: string;
}

export const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(({
  label,
  isSelected = false,
  onSelect,
  className,
}, ref) => {
  const onClick = () => {
    if (onSelect) {
      onSelect();
    }
  };

  const tabClassNames = classNames.bind(styles)([
    'tab',
    {selected: isSelected},
    className,
  ]);

  return (
    <button
      ref={ref}
      type="button"
      id={`${label}-tab`}
      role="tab"
      className={tabClassNames}
      tabIndex={isSelected ? 0 : -1}
      aria-selected={isSelected}
      aria-controls={`${label}-panel`}
      onClick={onClick}
    >
      {label}
    </button>
  );
});
