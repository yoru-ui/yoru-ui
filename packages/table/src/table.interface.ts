import React from 'react';

/**
 * base table columns type
 */
export type ColumnType = {
  title: string;
  selector: string;
  sorter?: () => void;
  render?: (text: string, record: object) => React.ReactNode;
  align?: 'inherit' | 'left' | 'right' | 'center' | 'justify';
  width?: number | string;
};

export interface IBaseTableProperties {
  fields: object[];
  columns: ColumnType[];
}
