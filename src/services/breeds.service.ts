import ApiService from '../api/api';
import { Breed } from '../types/api';

const api = ApiService.Instance;

export const BreedsService = {
  async getAll() {
    return api.get<Breed[]>('/v1/breeds');
  },
};
