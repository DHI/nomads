import { Context, ReactNode } from 'react';
import { Schema } from 'yup';

export interface Step {
  title: string;
  component: ReactNode;
  validationSchema?: Schema<any>;
}

export interface WizardContextInterface {
  actions: {
    goToPrevious: () => void;
    goToNext: () => void;
    goToStep: (step: number) => void;
    setIsDisabled: (isDisabled: boolean) => void;
  };
  config: {
    steps: Step[];
    isDisabled: boolean;
    activeStep: number;
    activeTitle: string;
    isFirstStep: boolean;
    isLastStep: boolean;
  };
  shared: object;
}

export interface Props {
  context: Context<WizardContextInterface>;
  steps: Step[];
  children: ReactNode;
  disabled: boolean;
  onDisabled?: (state: boolean) => any;
  onStepChange?: (step: number) => any;
  initialStep: number;
  shared?: object;
}
