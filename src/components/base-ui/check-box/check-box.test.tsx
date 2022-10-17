import { render } from '@testing-library/react';
import CheckBox from './check-box';

describe('CheckBox', () => {
  test('render check box not crash', () => {
    render(<CheckBox />);
  });
});
