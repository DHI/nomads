import { ElementType, ReactEventHandler } from 'react';

export interface IColumn {
  heading?: string;
  field?: string;
  component?: ElementType;
}

export interface IValue {
  [property: string]: any;
}

export interface IData extends IValue {
  id: string | number;
}

export interface IProps {
  columns: IColumn[];
  data: IValue[];
  hover?: boolean;
  sorting: IValue[];
  onRowClick?: (row: IValue) => void;
  onHeadClick?: (head: IValue) => void;
}
