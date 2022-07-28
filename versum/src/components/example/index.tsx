import { ReactNode } from 'react';

import * as Styles from './styles';

export type ExampleProps = {
  children?: string | ReactNode;
};

export const Example = ({ children }: ExampleProps) => {
  return <Styles.Container>{children}</Styles.Container>;
};
