import { FC, HTMLAttributes } from 'react';
import styles from './GeneratedForm.module.scss';

type FormItemType = 'text' | 'number' | 'checkbox' | 'radio' | 'textarea' | 'date';

interface FormItem extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  type: FormItemType;
};

interface FormButton extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export type FormJSON = {
  title?: string;
  items?: FormItem[];
  buttons?: FormButton[];
};

interface GeneratedFormProps {
  formJSON: FormJSON;
}

export const GeneratedForm: FC<GeneratedFormProps> = ({ formJSON }) => {
  const { title, items, buttons } = formJSON;

  return (
    <div className={styles.wrapper}>
      {!!title && <p><b>{title}</b></p>}
      <form className={styles.form}>
        {items?.map(({ label, type, id, ...rest }) => (
          <div key={label} className={styles.field}>
            <label htmlFor={id ?? label} className={styles.label}>
              {label}
            </label>
            {type === 'textarea'
              ? <textarea id={id ?? label} {...rest}></textarea>
              : <input type={type} id={id ?? label} {...rest} />
            }
          </div>
        ))}
        <div className={styles.buttons}>
          {buttons?.map(({ text, ...props }) => (
            <button key={text} {...props}>{text}</button>
          ))}
        </div>
      </form>
    </div>
  );
};
