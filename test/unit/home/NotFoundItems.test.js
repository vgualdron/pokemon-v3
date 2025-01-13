import { render, fireEvent } from '@testing-library/vue';
import { describe, it, vi, expect } from 'vitest';
import NotFoundItems from '../../../components/home/NotFoundItems.vue';
import { usePokemonStore } from '../../../stores/pokemon';

// Mock del store de Pokemon
vi.mock('../../../stores/pokemon', () => ({
  usePokemonStore: vi.fn().mockReturnValue({
    setSearch: vi.fn(),
  }),
}));

describe('NotFoundItems component', () => {
  it('should render the component with title and subtitle', () => {
    const { getByText } = render(NotFoundItems);

    // Verificamos que el título y subtítulo se rendericen correctamente
    expect(getByText('Uh-oh!')).toBeInTheDocument();
    expect(getByText('You look lost on your journey!')).toBeInTheDocument();
  });

  it('should call clearSearch when "Go back home" button is clicked', async () => {
    const mockSetSearch = vi.fn();
    usePokemonStore.mockReturnValue({
      setSearch: mockSetSearch,
    });

    const { getByText } = render(NotFoundItems);

    // Simulamos el clic en el botón
    const button = getByText('Go back home');
    await fireEvent.click(button);

    // Verificamos que se haya llamado al método setSearch
    expect(mockSetSearch).toHaveBeenCalledWith('');
  });
});
