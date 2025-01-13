import { render, screen } from '@testing-library/vue';
import { describe, it, vi, expect } from 'vitest';
import Loader from '../../../components/common/Loader.vue';
import { useCommonStore } from '../../../stores/common';

// Mock del store de Pinia
vi.mock('../../../stores/common', () => ({
  useCommonStore: vi.fn().mockReturnValue({
    loader: false, // Valor inicial del estado `loader`
  }),
}));

describe('Loader component', () => {
  it('should not display the loader when "loader" is false', () => {
    // Configurar el mock para que `loader` sea false
    useCommonStore.mockReturnValue({
      loader: false,
    });

    // Renderizar el componente
    render(Loader);

    // Verificar que el elemento del loader no está visible
    expect(screen.queryByRole('img', { name: /loader/i })).not.toBeInTheDocument();
  });

  it('should display the loader when "loader" is true', () => {
    // Configurar el mock para que `loader` sea true
    useCommonStore.mockReturnValue({
      loader: true,
    });

    // Renderizar el componente
    render(Loader);

    // Verificar que el loader está visible
    expect(screen.getByRole('img', { name: /loader/i })).toBeInTheDocument();
  });
});
