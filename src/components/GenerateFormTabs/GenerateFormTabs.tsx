import { FC, useState } from 'react';
import { Tab, Tabs } from '@UIKit/Tabs';
import { FormGenerator } from '@components/FormGenerator';
import { FormJSON, GeneratedForm } from '@components/GeneratedForm';

export const GenerateFormTabs: FC = () => {
  const [formJSON, setFormJSON] = useState<FormJSON>({});

  const onSaveForm = (json: FormJSON) => setFormJSON(json);

  const tabs: Tab[] = [
    {
      label: 'Config',
      panel: <FormGenerator onSave={onSaveForm} />
    },
    {
      label: 'Result',
      panel: <GeneratedForm formJSON={formJSON} />
    },
  ];

  return <Tabs tabs={tabs} />;
};
