import { render, fireEvent } from '@testing-library/vue';
import { describe, it, vi, expect } from 'vitest';
import InputSearch from '../../../components/home/InputSearch.vue';
import { usePokemonStore } from '../../../stores/pokemon';

// Mock de usePokemonStore
vi.mock('../../../stores/pokemon', () => ({
  usePokemonStore: vi.fn().mockReturnValue({
    search: '',
    setSearch: vi.fn(),
  }),
}));

describe('InputSearch component', () => {
  it('should update the store value when typing in the input', async () => {
    const mockSetSearch = vi.fn();

    // Mock del store para usar el mockSetSearch
    usePokemonStore.mockReturnValue({
      search: '',
      setSearch: mockSetSearch,
    });

    const { getByPlaceholderText } = render(InputSearch);

    // Seleccionamos el campo de búsqueda
    const input = getByPlaceholderText('Search');

    // Simulamos escribir en el input
    await fireEvent.update(input, 'Pikachu');

    // Verificamos que setSearch haya sido llamado con el valor correcto
    expect(mockSetSearch).toHaveBeenCalledWith('Pikachu');
  });

  it('should reflect the store value in the input field', () => {
    const mockSearch = 'Pikachu';

    // Mock del store para que devuelva un valor específico
    usePokemonStore.mockReturnValue({
      search: mockSearch,
      setSearch: vi.fn(),
    });

    const { getByPlaceholderText } = render(InputSearch);

    // Verificamos que el valor del input refleje el valor del store
    const input = getByPlaceholderText('Search');
    expect(input.value).toBe(mockSearch);
  });
});
