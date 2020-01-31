import React, { FC, useContext, ElementType } from 'react';
import Button from '@material-ui/core/Button';

import { WizardContext } from '../../Wizard';

export interface IProps {
  component?: ElementType;
  labels?: {
    backLabel?: string;
    submitLabel?: string;
    nextLabel?: string;
  };
}

const WizardFooter: FC<IProps> = ({ component, labels = {} }) => {
  const { backLabel = '« Back', nextLabel = 'Next »', submitLabel = 'Create' } = labels;
  const context = useContext(WizardContext);
  const { actions, config } = context;
  const { goToPrevious, goToNext } = actions;
  const { isFirstStep, isLastStep, isDisabled } = config;
  if (component) {
    const Component = component;
    return <Component context={context} />;
  }
  return (
    <>
      <Button type="button" variant="outlined" color="primary" disabled={isFirstStep} onClick={goToPrevious}>
        {backLabel}
      </Button>
      {isLastStep ? (
        <Button type="submit" variant="contained" color="primary" disabled={isDisabled}>
          {submitLabel}
        </Button>
      ) : (
        <Button type="button" variant="contained" color="primary" disabled={isDisabled} onClick={goToNext}>
          {nextLabel}
        </Button>
      )}
    </>
  );
};

export default WizardFooter;
