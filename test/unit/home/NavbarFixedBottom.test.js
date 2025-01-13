import { render, fireEvent } from '@testing-library/vue';
import { describe, it, vi, expect } from 'vitest';
import NavbarFixedBottom from '../../../components/home/NavbarFixedBottom.vue';
import { usePokemonStore } from '../../../stores/pokemon';

// Mock del store de Pokemon
vi.mock('../../../stores/pokemon', () => ({
  usePokemonStore: vi.fn().mockReturnValue({
    setShowFavorites: vi.fn(),
    showFavorites: false, // Estado inicial de showFavorites
  }),
}));

describe('NavbarFixedBottom component', () => {
  it('should render All and Favorites buttons', () => {
    const { getByText } = render(NavbarFixedBottom);

    // Verificamos que ambos botones se rendericen correctamente
    expect(getByText('All')).toBeInTheDocument();
    expect(getByText('Favorites')).toBeInTheDocument();
  });

  it('should disable Favorites button when disabledFavorites prop is true', () => {
    const { getByText } = render(NavbarFixedBottom, {
      props: {
        disabledFavorites: true,
      },
    });

    const favoritesButton = getByText('Favorites');

    // Verificamos que el botón de Favorites esté deshabilitado
    expect(favoritesButton).toBeDisabled();
  });

  it('should call setShowFavorites when clicking the All or Favorites button', async () => {
    const mockSetShowFavorites = vi.fn();
    usePokemonStore.mockReturnValue({
      setShowFavorites: mockSetShowFavorites,
      showFavorites: false,
    });

    const { getByText } = render(NavbarFixedBottom);

    // Simulamos el clic en el botón de Favorites
    const favoritesButton = getByText('Favorites');
    await fireEvent.click(favoritesButton);

    // Verificamos que setShowFavorites fue llamado con el valor correcto
    expect(mockSetShowFavorites).toHaveBeenCalledWith(true);
  });
});
