import Navbar from '@/components/common/Navbar/Navbar.vue';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

describe('NavigationBar', () => {
  it('drawer should open when click on hamburger button', async () => {
    render(Navbar);

    const user = screen.getByLabelText('menu-button');

    await userEvent.click(user);

    const drawer = screen.getByLabelText('body');

    expect(drawer).toBeVisible();
  });

  it('drawer should close when click on hamburger button', async () => {
    render(Navbar);

    const user = screen.getByLabelText('menu-button');

    await userEvent.click(user);

    const drawer = screen.getByLabelText('body');

    await userEvent.click(user);

    expect(drawer).not.toBeVisible();
  });

  it('drawer should close when click on mask', async () => {
    render(Navbar);

    const user = screen.getByLabelText('menu-button');

    await userEvent.click(user);

    const mask = screen.getByLabelText('mask');

    await userEvent.click(mask);

    const drawer = screen.getByLabelText('body');

    expect(drawer).not.toBeVisible();
  });

  it('drawer should close when click on link', async () => {
    render(Navbar);

    const user = screen.getByLabelText('menu-button');

    await userEvent.click(user);

    const link = screen.getByLabelText('link-button');

    await userEvent.click(link);

    expect(link).not.toBeVisible();
  });
});
