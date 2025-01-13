import { render, fireEvent } from '@testing-library/vue';
import { describe, it, vi, expect } from 'vitest';
import Item from '../../../components/home/Item.vue';
import { usePokemonStore } from '../../../stores/pokemon';
import { useCommonStore } from '../../../stores/common';

// Mock de usePokemonStore
vi.mock('../../../stores/pokemon', () => ({
  usePokemonStore: vi.fn().mockReturnValue({
    getPokemon: vi.fn(),
    setShowModalPokemon: vi.fn(),
    setPokemons: vi.fn(),
    pokemons: {
      results: [
        { name: 'Pikachu', favorite: false },
      ],
    },
  }),
}));

// Mock de useCommonStore
vi.mock('../../../stores/common', () => ({
  useCommonStore: vi.fn().mockReturnValue({
    setLoader: vi.fn(),
  }),
}));

describe('Item component', () => {
  const item = { name: 'Pikachu', favorite: false };

  it('should call selectPokemon when clicking on the Pokemon name', async () => {
    const mockSetLoader = vi.fn();
    const mockGetPokemon = vi.fn();
    const mockSetShowModalPokemon = vi.fn();

    useCommonStore.mockReturnValue({
      setLoader: mockSetLoader,
    });

    usePokemonStore.mockReturnValue({
      getPokemon: mockGetPokemon,
      setShowModalPokemon: mockSetShowModalPokemon,
      setPokemons: vi.fn(),
      pokemons: { results: [{ name: 'Pikachu', favorite: false }] },
    });

    const { getByText } = render(Item, {
      props: {
        item,
      },
    });

    // Simulamos el clic en el nombre del Pokémon
    const pokemonName = getByText('Pikachu');
    await fireEvent.click(pokemonName);

    // Usamos un `await` para asegurarnos de que las promesas se hayan resuelto antes de las verificaciones
    await Promise.resolve();  // Asegura que las promesas pendientes se resuelvan

    // Verificamos que las funciones fueron llamadas correctamente
    expect(mockSetLoader).toHaveBeenCalledWith(true);
    expect(mockGetPokemon).toHaveBeenCalledWith({ name: 'Pikachu', isFavorite: false });
    expect(mockSetLoader).toHaveBeenCalledWith(false);
    expect(mockSetShowModalPokemon).toHaveBeenCalledWith(true);  // Verifica que se haya llamado con el valor correcto
  });
});
