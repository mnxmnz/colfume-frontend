import React from 'react';
import { withSize } from 'react-sizeme';
import { ISizeProps } from 'types/main';

function MyComponent({ size }: ISizeProps) {
  return <>{size.width}</>;
}

export default withSize()(MyComponent);
