import React, { FC, useContext, ElementType } from 'react';
import { WizardContext } from '../../Wizard';

const WizardContent: FC = () => {
  const { config } = useContext(WizardContext);
  const { steps, activeStep } = config;
  const { component: Component, ...rest }: { component: ElementType } = [...steps].find(
    (step, index) => index === activeStep,
  );
  return (
    <div data-drawer-content="data-drawer-content">
      <Component {...rest} />
    </div>
  );
};

export default WizardContent;
