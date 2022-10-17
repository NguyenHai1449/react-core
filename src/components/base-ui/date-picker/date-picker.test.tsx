import { render } from '@testing-library/react';
import DatePicker from './date-picker';

describe('DatePicker', () => {
  test('render date picker not crash', () => {
    render(<DatePicker />);
  });
});
