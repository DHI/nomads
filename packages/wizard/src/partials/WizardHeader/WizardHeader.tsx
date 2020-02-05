import React, { FC, useContext, ElementType } from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { WizardContext } from '../../Wizard';

import useStyles from './styles';

export interface IProps {
  component?: ElementType;
  boxProps?: BoxProps;
}

const WizardHeader: FC<IProps> = ({ boxProps = {}, component }) => {
  const props = {
    width: 1,
    ...boxProps,
  };
  const classes = useStyles({});
  const context = useContext(WizardContext);
  const { config } = context;
  const { activeStep, steps } = config;
  if (component) {
    const Component = component;
    return <Component context={context} />;
  }
  return (
    <Box {...props}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.stepper}
      >
        {steps.map(({ title }: { title: string }) => (
          <Step key={title}>
            <StepLabel>{title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default WizardHeader;
