import { Header } from '@components/Header';
import { ExampleSection } from '@components/ExampleSection';
import { GeneratorSection } from '@components/GeneratorSection';
import styles from './App.module.scss';
import classNames from 'classnames';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={classNames(styles.container, 'container')}>
          <ExampleSection />
          <GeneratorSection />
        </div>
      </main>
    </div>
  );
};
