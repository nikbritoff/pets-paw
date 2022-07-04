import { useQuery } from 'react-query';

import { BreedsService } from './breeds.service';
import { QueryKeys } from './constants';

export const useBreeds = () => {
  return useQuery(QueryKeys.Breeds, () => BreedsService.getAll());
};
