import Button from './Button.vue';
import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';

describe('Button', () => {
  it('background color should be green when button type is primary', async () => {
    const { container } = render(Button, { props: { type: 'primary' } });

    expect(container.firstChild).toHaveClass('button--primary');
  });

  it('background color should be blue when button type is success', async () => {
    const { container } = render(Button, { props: { type: 'success' } });

    expect(container.firstChild).toHaveClass('button--success');
  });

  it('background color should be neutral when button type is not defined', async () => {
    const { container } = render(Button);

    expect(container.firstChild).toHaveClass('button--neutral');
  });

  it('background color should be yellow when button type is warning', async () => {
    const { container } = render(Button, { props: { type: 'warning' } });

    expect(container.firstChild).toHaveClass('button--warning');
  });

  it('background color should be red when button type is error', async () => {
    const { container } = render(Button, { props: { type: 'error' } });

    expect(container.firstChild).toHaveClass('button--error');
  });

  it('size should be big when prop is big', async () => {
    const { container } = render(Button, { props: { size: 'big' } });

    expect(container.firstChild).toHaveClass('button--big');
  });

  it('size should be normal when prop is not defined', async () => {
    const { container } = render(Button);

    expect(container.firstChild).toHaveClass('button--normal');
  });

  it('size should be small when prop is small', async () => {
    const { container } = render(Button, { props: { size: 'small' } });

    expect(container.firstChild).toHaveClass('button--small');
  });

  it('should be disabled when have attribute disabled', async () => {
    const { container } = render(Button, { props: { disabled: true } });

    expect(container.firstChild).toHaveAttribute('disabled');
  });
});
