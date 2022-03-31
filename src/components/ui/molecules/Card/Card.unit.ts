import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/vue';
import Card from '@/components/ui/molecules/Card/Card.vue';

describe('Card', () => {
  it('thumbnail has image when prop is not null', async () => {
    render(Card, {
      props: { item: { poster: 'image path' } },
    });

    const sourcePath = screen.getByAltText('thumbnail image');

    expect(sourcePath).toHaveAttribute('src', 'image path');
  });

  it('thumbnail has title when prop is not null', async () => {
    render(Card, { props: { item: { title: 'Placeholder' } } });

    const titleText = screen.getByText('Placeholder');

    expect(titleText).toBeInTheDocument();
  });

  it('thumbnail have price when prop is not null', async () => {
    render(Card, { props: { item: { genre: ['Horror'] } } });

    const genre = screen.getByText('Horror');

    expect(genre).toBeInTheDocument();
  });
});
