import { FC } from 'react';
import exampleJSON from '@/example.json';
import styles from './ExampleSection.module.scss';

export const ExampleSection: FC = () => {
  const exampleJSONStringify = JSON.stringify(exampleJSON, undefined, 2);

  const copyJSONToClipboard = () => {
    navigator.clipboard.writeText(exampleJSONStringify)
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.head}>Example</h3>
      <p className={styles.info}>
        <strong>You can copy example JSON and try it in generator</strong>
      </p>
      <div className={styles.wrapper}>
        <button
          type="button"
          className={styles.button}
          onClick={copyJSONToClipboard}
        >
          Copy
        </button>
        <pre className={styles.pre}>
          <code className={styles.code}>
            {exampleJSONStringify}
          </code>
        </pre>
      </div>
    </section>
  );
};
