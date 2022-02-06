import { FC } from 'react';
import { GenerateFormTabs } from '@components/GenerateFormTabs';
import styles from './GeneratorSection.module.scss';

export const GeneratorSection: FC = () => (
  <section className={styles.section}>
    <h3 className={styles.head}>Generator</h3>
    <GenerateFormTabs />
  </section>
);
