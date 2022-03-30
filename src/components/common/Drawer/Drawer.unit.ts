import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/vue';
import drawer from '@/components/common/Drawer/Drawer.vue';
import { Positions } from '@/models/enums/positions';

describe('Drawer', () => {
  it('drawer should be right when placement has default value', async () => {
    render(drawer);

    expect(screen.getByLabelText('body')).toHaveClass('drawer__body--right');
  });

  it('drawer should be right when placement has Position.R', async () => {
    render(drawer, { props: { placement: Positions.R } });

    expect(screen.getByLabelText('body')).toHaveClass('drawer__body--right');
  });

  it('drawer should be left when placement has Position.L', async () => {
    render(drawer, { props: { placement: Positions.L } });

    expect(screen.getByLabelText('body')).toHaveClass('drawer__body--left');
  });

  it('drawer should has 50vw when width has default value', async () => {
    render(drawer);

    const nav = screen.getByLabelText('body');

    expect(getComputedStyle(nav).width).toBe('50vw');
  });

  it('drawer should has 30vw when width has this value', async () => {
    render(drawer, { props: { width: '30vw' } });

    const nav = screen.getByLabelText('body');

    expect(getComputedStyle(nav).width).toBe('30vw');
  });
});
