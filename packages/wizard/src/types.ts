import { ReactNode, ElementType } from 'react';
import { FormikConfig, FormikValues } from 'formik';

export interface Values {
  [field: string]: any;
}

export interface Step {
  title: string;
  component: ElementType;
  validationSchema?: (input: any) => void;
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
  form?: FormikValues;
}

export interface Props {
  children: ReactNode;
  form: FormikConfig<Values>;
  initialStep: number;
  shared?: object;
  steps: Step[];
}
