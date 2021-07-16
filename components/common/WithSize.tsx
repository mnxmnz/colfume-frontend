import React from 'react';
import { withSize } from 'react-sizeme';

function MyComponent({ size }) {
  return <>{size.width}</>;
}

export default withSize()(MyComponent);
