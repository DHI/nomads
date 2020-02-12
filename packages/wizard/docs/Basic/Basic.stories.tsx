import React from 'react';
import Box from '@material-ui/core/Box';
import { string, object } from 'yup';

import Wizard, { WizardHeader, WizardContent, WizardFooter } from '../../src';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

const steps = [
  {
    title: 'One',
    component: Step1,
    validationSchema: () =>
      object().shape({
        firstName: string().required(),
      }),
  },
  {
    title: 'Two',
    component: Step2,
    validationSchema: () =>
      object().shape({
        lastName: string().required(),
      }),
  },
];

export const Basic = () => (
  <Box bgcolor="background" width={1} padding={4}>
    <Wizard
      initialStep={0}
      steps={steps}
      form={{
        initialValues: {
          firstName: '',
          lastName: '',
        },
        onSubmit: ({ firstName, lastName }) =>
          window.alert(`Hi, ${firstName} ${lastName}!`),
      }}
    >
      <WizardHeader />
      <WizardContent boxProps={{ paddingY: 4 }} />
      <WizardFooter />
    </Wizard>
  </Box>
);
