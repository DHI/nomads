import React, { useContext } from 'react';
import { WizardContext } from '../../Basic.stories';

const Content = () => {
  const { config } = useContext(WizardContext);
  const { steps, activeStep } = config;
  const { component: Component, ...rest }: { component: any } = [...steps].find((step, index) => index === activeStep);
  return <Component {...rest} />;
};

export default Content;
