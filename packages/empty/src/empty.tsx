import * as React from 'react';

export interface EmptyProperties {
  // your props here
  children: React.ReactNode;
}

export const Empty: React.FC<EmptyProperties> = ({ children }) => {
  return <div>{children}</div>;
};
