import { render } from '@testing-library/react';
import Input from './input';

describe('Input', () => {
  test('render input not crash', () => {
    render(<Input />);
  });
});
