import list from '@/components/ui/objects/list/list.vue';
import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';

describe('List', () => {
  it('list should be horizontal when horizontal is true', async () => {
    const { container } = render(list, { props: { horizontal: true } });

    expect(container.firstChild).toHaveClass('list--horizontal');
  });

  it('list should be vertical when horizontal is false', async () => {
    const { container } = render(list, { props: { horizontal: false } });

    expect(container.firstChild).not.toHaveClass('list--horizontal');
  });
});
