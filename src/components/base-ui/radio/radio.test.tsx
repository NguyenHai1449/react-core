import { render } from '@testing-library/react';
import Radio from './radio';

describe('Radio', () => {
  test('render radio not crash', () => {
    render(<Radio />);
  });
});
