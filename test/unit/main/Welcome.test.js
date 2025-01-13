import { render, waitFor } from '@testing-library/vue';
import { describe, it, vi, expect } from 'vitest';
import Welcome from '../../../components/main/Welcome.vue';
import { useCommonStore } from '../../../stores/common';
import CommonHelper from '../../../helpers/CommonHelper';

// Mock del store
vi.mock('../../../stores/common', () => ({
  useCommonStore: vi.fn().mockReturnValue({
    setLoader: vi.fn(),
  }),
}));

// Mock de CommonHelper
vi.mock('../../../helpers/CommonHelper', () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      delay: vi.fn().mockResolvedValue(),
    })),
  };
});

describe('Welcome component', () => {
  it('should call setLoader and simulate delay on mounted', async () => {
    const mockSetLoader = vi.fn();
    const mockDelay = vi.fn().mockResolvedValue();

    // Configurar los mocks
    useCommonStore.mockReturnValue({
      setLoader: mockSetLoader,
    });
    CommonHelper.mockImplementation(() => ({
      delay: mockDelay,
    }));

    // Renderizar el componente
    render(Welcome);

    // Verificar que setLoader fue llamado con true al inicio
    expect(mockSetLoader).toHaveBeenCalledWith(true);

    // Verificar que delay fue llamado
    expect(mockDelay).toHaveBeenCalled();

    // Esperar que setLoader sea llamado con false después del delay
    await waitFor(() => {
      expect(mockSetLoader).toHaveBeenCalledWith(false);
    });
  });
});
