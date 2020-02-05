import React, { FC, useContext, ElementType } from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { WizardContext } from '../../Wizard';

export interface IProps {
  boxProps?: BoxProps;
  component?: ElementType;
  labels?: {
    backLabel?: string;
    submitLabel?: string;
    nextLabel?: string;
  };
}

const WizardFooter: FC<IProps> = ({
  boxProps = {},
  component,
  labels = {},
}) => {
  const props = {
    display: 'flex',
    justifyContent: 'space-between',
    width: 1,
    ...boxProps,
  };
  const {
    backLabel = '« Back',
    nextLabel = 'Next »',
    submitLabel = 'Create',
  } = labels;
  const context = useContext(WizardContext);
  const { actions, config } = context;
  const { goToPrevious, goToNext } = actions;
  const { isFirstStep, isLastStep, isDisabled } = config;
  if (component) {
    const Component = component;
    return <Component context={context} />;
  }
  return (
    <Box {...props}>
      <Button
        key="back"
        type="button"
        variant="outlined"
        color="primary"
        disabled={isFirstStep}
        onClick={goToPrevious}
      >
        {backLabel}
      </Button>
      {isLastStep ? (
        <Button
          key="submit"
          type="submit"
          variant="contained"
          color="primary"
          disabled={isDisabled}
        >
          {submitLabel}
        </Button>
      ) : (
        <Button
          key="next"
          type="button"
          variant="contained"
          color="primary"
          disabled={isDisabled}
          onClick={goToNext}
        >
          {nextLabel}
        </Button>
      )}
    </Box>
  );
};

export default WizardFooter;
