import React, { createContext } from 'react';

import Wizard, { WizardHeader, WizardContent, WizardFooter } from '../../Wizard';

import { WizardStateInterface } from '../../types';

import Header from './partials/Header';
import Content from './partials/Content';
import Footer from './partials/Footer';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';

export const WizardState = createContext<WizardStateInterface>(null);

const steps = [
  {
    title: 'Første',
    component: Step1,
  },
  {
    title: 'Anden',
    component: Step2,
  },
  {
    title: 'Tredje',
    component: Step3,
  },
  {
    title: 'Fjerde',
    component: Step4,
  },
  {
    title: 'Femte',
    component: Step5,
  },
];

// export const Basic = () => (
//   <div style={{ maxWidth: 600 }}>
//     <Wizard initialStep={0} context={WizardState} steps={steps} disabled={false}>
//       <div style={{ margin: 50 }}>
//         <WizardHeader component={Header} />
//       </div>
//       <div style={{ margin: 50 }}>
//         <WizardContent component={Content} />
//       </div>
//       <div style={{ margin: 50 }}>
//         <WizardFooter component={Footer} />
//       </div>
//     </Wizard>
//   </div>
// );

export const Basic = () => <div style={{ maxWidth: 600 }}>Wizard</div>;
