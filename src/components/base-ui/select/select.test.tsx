import { render } from '@testing-library/react';
import Select from './select';

describe('Select', () => {
  test('render select not crash', () => {
    render(<Select />);
  });
});
