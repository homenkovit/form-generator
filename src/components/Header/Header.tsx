import { FC } from 'react';
import styles from './Header.module.scss';

export const Header: FC = () => (
  <header className={styles.header}>
    <h1>Form generator</h1>
    <h2>Write config in JSON format and get your form!</h2>
  </header>
);
