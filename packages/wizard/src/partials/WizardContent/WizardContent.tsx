import React, { FC, useContext, ElementType } from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';
import { WizardContext } from '../../Wizard';

export interface IProps {
  boxProps?: BoxProps;
}

const WizardContent: FC<IProps> = ({
  boxProps = {
    width: 1,
  },
}) => {
  const context = useContext(WizardContext);
  const { config } = context;
  const { steps, activeStep } = config;
  const { component: Component, ...rest }: { component: ElementType } = [
    ...steps,
  ].find((step, index) => index === activeStep);
  return (
    <Box {...boxProps} data-drawer-content="data-drawer-content">
      <Component {...context} {...rest} />
    </Box>
  );
};

export default WizardContent;
