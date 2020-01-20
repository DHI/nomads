import React, { useContext } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { WizardState } from '../../Basic.stories';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles(useStyles);
  const { config } = useContext(WizardState);
  const { activeStep, activeTitle, steps } = config;
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h2>{activeTitle}</h2>
      </div>
      <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
        {steps.map(({ title }) => (
          <Step key={title}>
            <StepLabel>{title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Header;
