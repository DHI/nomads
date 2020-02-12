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
  disabled = false,
  onDisabled,
  onStepChange,
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
  const step = useMemo(() => (isValid ? initialStep : 0), [isValid]);

  // States
  const [activeStep, setActiveStep] = useState(step);
  const [activeTitle, setActiveTitle] = useState([...steps][step].title);
  const [isDisabled, setIsDisabled] = useState(disabled);

  // Checkpoints
  const isFirstStep = useMemo(() => activeStep === 0, [activeStep]);
  const isLastStep = useMemo(() => activeStep === steps.length - 1, [
    activeStep,
  ]);

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

  useEffect(() => {
    handleSetActiveStep(step);
  }, [initialStep]);

  useEffect(() => {
    handleSetIsDisabled(disabled);
  }, [disabled]);

  const actions = {
    goToPrevious,
    goToNext,
    goToStep,
    setIsDisabled: handleSetIsDisabled,
  };

  const config = useMemo(
    () => ({
      steps,
      isDisabled,
      activeStep,
      activeTitle,
      isFirstStep,
      isLastStep,
    }),
    [isDisabled, activeStep, activeTitle, isFirstStep, isLastStep],
  );

  const schema = useCallback(() => {
    const { validationSchema = () => object().shape({}) } = steps[activeStep];
    return validationSchema({});
  }, [activeStep]);

  return (
    <Formik validationSchema={schema} {...form}>
      {props => (
        <Form>
          <WizardWrapper
            actions={actions}
            config={config}
            shared={shared}
            form={props}
          >
            {children}
          </WizardWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default Wizard;
