import React, { useEffect, FC, ReactNode } from 'react';

import * as Types from '../../types';

import { WizardContextProvider } from '../../Wizard';

interface IProps extends Types.WizardContext {
  children: ReactNode;
}

const WizardWrapper: FC<IProps> = ({
  children,
  actions,
  config,
  shared,
  form,
}) => {
  const { setIsDisabled } = actions;
  const { activeStep } = config;
  const { values, isValid, validateForm } = form;

  const handleFormValidation = async () => {
    await validateForm();
  };

  useEffect(() => {
    handleFormValidation();
  }, [activeStep, values]);

  useEffect(() => {
    setIsDisabled(!isValid);
  }, [isValid]);

  return (
    <WizardContextProvider
      value={{
        actions,
        config,
        shared,
        form,
      }}
    >
      {children}
    </WizardContextProvider>
  );
};

export default WizardWrapper;
