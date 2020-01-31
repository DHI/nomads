import React, { FC, useEffect, useState, createContext } from 'react';
import * as Types from './types';

import Header from './partials/WizardHeader';
import Content from './partials/WizardContent';
import Footer from './partials/WizardFooter';

export const WizardHeader = Header;
export const WizardContent = Content;
export const WizardFooter = Footer;

export const WizardContext = createContext<Types.WizardContext>({});

const WizardContextProvider = WizardContext.Provider;

const Wizard: FC<Types.Props> = ({
  steps,
  children,
  disabled = false,
  onDisabled,
  onStepChange,
  initialStep,
  shared = {},
}) => {
  // Validation
  const isAboveMin = initialStep >= 0;
  const isBelowMax = initialStep <= steps.length - 1;
  const isValid = isAboveMin && isBelowMax;

  // State
  const step = isValid ? initialStep : 0;
  const [activeStep, setActiveStep] = useState(step);
  const [activeTitle, setActiveTitle] = useState([...steps][step].title);
  const [isDisabled, setIsDisabled] = useState(disabled);

  useEffect(() => {
    handleSetActiveStep(step || initialStep);
  }, [initialStep]);

  useEffect(() => {
    handleSetIsDisabled(disabled);
  }, [disabled]);

  // Step checkpoints
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === steps.length - 1;

  const config = {
    steps,
    isDisabled,
    activeStep,
    activeTitle,
    isFirstStep,
    isLastStep,
  };

  // Handlers
  const handleSetActiveStep = (stepToSetActive: number) => {
    const { title } = steps[stepToSetActive];
    const drawerSelector = '[data-drawer-content]';
    const drawerContent = document && document.querySelector(drawerSelector);
    if (drawerContent !== null) drawerContent.scrollTop = 0;
    if (onStepChange) onStepChange(stepToSetActive);
    setActiveStep(stepToSetActive);
    setActiveTitle(title);
  };
  const handleSetIsDisabled = (disabledBoolean: boolean) => {
    if (onDisabled) onDisabled(disabledBoolean);
    setIsDisabled(disabledBoolean);
  };

  // Actions
  const goToPrevious = () => handleSetActiveStep(activeStep - 1);
  const goToNext = () => handleSetActiveStep(activeStep + 1);
  const goToStep = (newStep: number) => handleSetActiveStep(newStep);

  const actions = {
    goToPrevious,
    goToNext,
    goToStep,
    setIsDisabled: handleSetIsDisabled,
  };

  return (
    <WizardContextProvider
      value={{
        actions,
        config,
        shared,
      }}
    >
      {children}
    </WizardContextProvider>
  );
};

export default Wizard;
