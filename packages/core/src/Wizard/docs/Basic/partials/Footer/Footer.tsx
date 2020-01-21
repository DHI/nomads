import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';

import { WizardContext } from '../../Basic.stories';

const Footer = () => {
  const { actions, config } = useContext(WizardContext);
  const { goToPrevious, goToNext } = actions;
  const { isFirstStep, isLastStep, isDisabled } = config;
  return (
    <div>
      <Button type="button" variant="outlined" color="primary" disabled={isFirstStep} onClick={goToPrevious}>
        « Back
      </Button>
      {isLastStep ? (
        <Button type="submit" variant="contained" color="primary" disabled={isDisabled}>
          Create
        </Button>
      ) : (
        <Button type="button" variant="contained" color="primary" disabled={isDisabled} onClick={goToNext}>
          Next »
        </Button>
      )}
    </div>
  );
};

export default Footer;
