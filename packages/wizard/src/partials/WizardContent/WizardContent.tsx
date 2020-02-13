import React, { FC, useContext, useEffect, ElementType } from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';
import { WizardContext } from '../../Wizard';

export interface IProps {
  boxProps?: BoxProps;
}

const WizardContent: FC<IProps> = ({ boxProps = {} }) => {
  // Concat props to Box
  const props = {
    width: 1,
    ...boxProps,
  };

  // Get state from Wizard
  const context = useContext(WizardContext);
  const { config } = context;
  const { steps, activeStep } = config;

  // Get active step component
  const { component: Component, ...rest }: { component: ElementType } = [
    ...steps,
  ].find((step, index) => index === activeStep);

  // Scroll to top when step has changed
  useEffect(() => {
    const drawerSelector = '[data-drawer-content]';
    const drawerContent = document && document.querySelector(drawerSelector);
    if (drawerContent !== null) drawerContent.scrollTop = 0;
  }, [activeStep]);

  return (
    <Box {...props} data-drawer-content="data-drawer-content">
      <Component {...context} {...rest} />
    </Box>
  );
};

export default WizardContent;
