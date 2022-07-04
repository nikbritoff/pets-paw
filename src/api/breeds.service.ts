import { Breed } from '../types/api';
import ApiService from './api';
import { QueryKeys } from './constants';

export const BreedsService = {
  async getAll() {
    return ApiService.Instance.get<Breed[]>(QueryKeys.Breeds);
  },
};
