import React from 'react';
import Box from '@material-ui/core/Box';

import Wizard, { WizardHeader, WizardContent, WizardFooter } from '../../src';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';

const steps = [
  {
    title: 'One',
    component: Step1,
  },
  {
    title: 'Two',
    component: Step2,
  },
  {
    title: 'Three',
    component: Step3,
  },
  {
    title: 'Four',
    component: Step4,
  },
  {
    title: 'Five',
    component: Step5,
  },
];

export const Basic = () => (
  <Box bgcolor="background" width={1} padding={4}>
    <Wizard initialStep={0} steps={steps}>
      <WizardHeader />
      <WizardContent boxProps={{ paddingY: 4 }} />
      <WizardFooter />
    </Wizard>
  </Box>
);
