import { render, screen } from '@testing-library/react';
import FormGroup from './form-group';

test('renders form group component', () => {
  const wrapper = render(<FormGroup />);
  expect(wrapper.container.firstChild).toHaveClass('form-group');
});
