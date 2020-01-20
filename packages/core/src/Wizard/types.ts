import { Context, ReactNode } from 'react';
import { Schema, boolean, number, string, bool } from 'yup';

export interface Step {
  title: string;
  component: ReactNode;
  validationSchema?: Schema<any>;
}

export interface WizardStateInterface {
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
  context: Context<WizardStateInterface>;
  steps: Step[];
  children: ReactNode;
  disabled: boolean;
  onDisabled?: (state: boolean) => any;
  onStepChange?: (step: number) => any;
  initialStep: number;
  shared?: object;
}
