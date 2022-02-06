import { FC, FormEvent, useState } from 'react';
import { FormJSON } from '@components/GeneratedForm';
import styles from './FormGenerator.module.scss';

interface FormGeneratorProps {
  onSave?: (json: FormJSON) => void;
}

export const FormGenerator: FC<FormGeneratorProps> = ({ onSave }) => {
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const validateJSON = (stringJSON: string): Record<string, string> | undefined => {
    try {
      const json = JSON.parse(stringJSON);
      return json;
    } catch (error) {
      console.error(error);
      setIsInvalid(true);
      return;
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsInvalid(false);

    const formData = new FormData(event.currentTarget);
    const textarea = formData.get('textarea');

    if (textarea) {
      const textareaTrimedValue = textarea.toString().trim();
      const json = validateJSON(textareaTrimedValue);

      if (onSave && json) {
        onSave(json);
      }
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
    >
      <label className={styles.label}>
        Config in JSON format:
        <textarea name="textarea" className={styles.textarea}></textarea>
      </label>
      {isInvalid && <p className={styles.error}>JSON is invalid, please correct it!</p>}
      <button type="submit" className={styles.button}>Apply</button>
    </form>
  );
};
