import React, {
  FC,
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo,
} from 'react';
import { Formik, Form } from 'formik';
import { object } from 'yup';

import * as Types from './types';

import WizardWrapper from './partials/WizardWrapper';

import Header from './partials/WizardHeader';
import Content from './partials/WizardContent';
import Footer from './partials/WizardFooter';

export const WizardHeader = Header;
export const WizardContent = Content;
export const WizardFooter = Footer;

export const WizardContext = createContext<Types.WizardContext>({});

export const WizardContextProvider = WizardContext.Provider;

const Wizard: FC<Types.Props> = ({
  form,
  steps = [],
  children,
  initialStep = 0,
  shared = {},
}) => {
  // Initial step validation
  const isAboveMin = useMemo(() => initialStep >= 0, [initialStep]);
  const isBelowMax = useMemo(() => initialStep <= steps.length - 1, [
    initialStep,
  ]);
  const isValid = useMemo(() => isAboveMin && isBelowMax, [
    isAboveMin,
    isBelowMax,
  ]);
  const step = useMemo(() => (isValid ? initialStep : 0), [
    isValid,
    initialStep,
  ]);

  // States
  const [activeStep, setActiveStep] = useState(step);
  const [activeTitle, setActiveTitle] = useState([...steps][step].title);
  const [isDisabled, setIsDisabled] = useState(true);

  // Checkpoints
  const isFirstStep = useMemo(() => activeStep === 0, [activeStep]);
  const isLastStep = useMemo(() => activeStep === steps.length - 1, [
    activeStep,
    steps,
  ]);

  // Set title on step change
  useEffect(() => {
    const { title } = steps[activeStep];
    setActiveTitle(title);
  }, [activeStep]);

  // Actions
  const goToPrevious = useCallback(() => setActiveStep(activeStep - 1), [
    activeStep,
  ]);
  const goToNext = useCallback(() => setActiveStep(activeStep + 1), [
    activeStep,
  ]);
  const goToStep = useCallback((newStep: number) => setActiveStep(newStep), []);

  const actions = useMemo(
    () => ({
      goToPrevious,
      goToNext,
      goToStep,
      setIsDisabled,
    }),
    [goToPrevious, goToNext, goToStep, setIsDisabled],
  );

  const config = useMemo(
    () => ({
      steps,
      isDisabled,
      activeStep,
      activeTitle,
      isFirstStep,
      isLastStep,
    }),
    [steps, isDisabled, activeStep, activeTitle, isFirstStep, isLastStep],
  );

  const schema = useCallback(() => {
    const { validationSchema = () => object().shape({}) } = steps[activeStep];
    return validationSchema({});
  }, [activeStep]);

  return (
    <Formik validationSchema={schema} {...form}>
      {formProps => (
        <Form>
          <WizardWrapper
            actions={actions}
            config={config}
            shared={shared}
            form={formProps}
          >
            {children}
          </WizardWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default Wizard;
