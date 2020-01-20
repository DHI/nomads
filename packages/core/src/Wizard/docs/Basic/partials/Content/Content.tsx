import React, { useContext } from 'react';
import { WizardState } from '../../Basic.stories';

const Content = () => {
  const { config } = useContext(WizardState);
  const { steps, activeStep } = config;
  const { component: Component, ...rest }: { component: any } = [...steps].find((step, index) => index === activeStep);
  return <Component {...rest} />;
};

export default Content;
