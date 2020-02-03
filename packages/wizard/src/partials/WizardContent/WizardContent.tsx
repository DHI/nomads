import React, { FC, useContext, ElementType } from 'react';
import { WizardContext } from '../../Wizard';

const WizardContent: FC = () => {
  const context = useContext(WizardContext);
  const { config } = context;
  const { steps, activeStep } = config;
  const { component: Component, ...rest }: { component: ElementType } = [...steps].find(
    (step, index) => index === activeStep,
  );
  return (
    <div data-drawer-content="data-drawer-content">
      <Component {...context} {...rest} />
    </div>
  );
};

export default WizardContent;
