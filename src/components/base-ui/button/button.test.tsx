import { render } from '@testing-library/react';
import Button from './button';

describe('Button base ui', () => {
  test('render button not crash', () => {
    render(<Button />);
  });
});
