import { ReactNode, ElementType } from 'react';
import { Schema } from 'yup';

export interface Step {
  title: string;
  component: ElementType;
  validationSchema?: Schema<any>;
}

export interface WizardContext {
  actions?: {
    goToPrevious: () => void;
    goToNext: () => void;
    goToStep: (step: number) => void;
    setIsDisabled: (isDisabled: boolean) => void;
  };
  config?: {
    steps: Step[];
    isDisabled: boolean;
    activeStep: number;
    activeTitle: string;
    isFirstStep: boolean;
    isLastStep: boolean;
  };
  shared?: object;
}

export interface Props {
  steps: Step[];
  children: ReactNode;
  disabled?: boolean;
  onDisabled?: (state: boolean) => any;
  onStepChange?: (step: number) => any;
  initialStep: number;
  shared?: object;
}
