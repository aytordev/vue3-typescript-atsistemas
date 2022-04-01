import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/vue';
import input from '@/components/ui/atoms/Input/Input.vue';
import { Colors } from '@/models/enums/colors';

describe('Input', () => {
  it('input should have green color when status is success', async () => {
    render(input, { props: { status: Colors.SUCCESS } });

    const inputRendered = screen.getByLabelText('input');

    expect(inputRendered).toHaveStyle('border-color: 00b694');
  });

  it('input should have yellow color when status is warning', async () => {
    render(input, { props: { status: Colors.WARNING } });

    const inputRendered = screen.getByLabelText('input');

    expect(inputRendered).toHaveStyle('border-color: f1ff66');
  });

  it('input should have red color when status is error', async () => {
    render(input, { props: { status: Colors.DANGER } });

    const inputRendered = screen.getByLabelText('input');

    expect(inputRendered).toHaveStyle('border-color: fc3904');
  });

  it('input should have gray color when status is not defined', async () => {
    render(input);

    const inputRendered = screen.getByLabelText('input');

    expect(inputRendered).toHaveStyle('border-color: bababa');
  });

  it('placeholder should be render when prop is defined', async () => {
    render(input, { props: { placeholder: 'placeholder' } });

    const placeholder = screen.getByPlaceholderText('placeholder');

    expect(placeholder).toBeInTheDocument();
  });

  it('label should be render when prop is defined', async () => {
    render(input, { props: { label: 'label' } });

    const label = screen.getByText('label');

    expect(label).toBeInTheDocument();
  });

  it('label should be render when prop is defined', async () => {
    render(input, { props: { message: 'message' } });

    const message = screen.getByText('message');

    expect(message).toBeInTheDocument();
  });

  it('input should be disabled when prop is true', async () => {
    render(input, { props: { message: 'message', disabled: true } });

    const message = screen.getByText('message');

    expect(message).toHaveStyle('color: bababa');
  });

  it('label should not be disabled when prop is false', async () => {
    render(input, { props: { message: 'message', disabled: false } });

    const message = screen.getByText('message');

    expect(message).toHaveStyle('color: 171717');
  });
});
