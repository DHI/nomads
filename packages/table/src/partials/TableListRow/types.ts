import { ElementType, ReactEventHandler } from 'react';

export interface IColoumn {
  heading?: string;
  field?: string;
  component?: ElementType;
}

export interface IValue {
  [property: string]: any;
}

export interface IProps {
  columns: IValue[];
  onRowClick?: (row: IValue) => void;
  hover: boolean;
  row: IValue;
}
