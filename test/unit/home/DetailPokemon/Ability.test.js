import { render } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import Ability from '../../../../components/home/DetailPokemon/Ability.vue';

describe('Ability component', () => {
  it('should render the name and value from the props correctly', () => {
    const abilityData = {
      name: 'Swift',
      value: '50'
    };

    const { getByText } = render(Ability, {
      props: {
        data: abilityData,
      },
    });

    // Verificamos que el nombre y valor de la habilidad estén en el DOM
    expect(getByText('Swift')).toBeInTheDocument();
    expect(getByText('50')).toBeInTheDocument();
  });
});
