import { ILoginPayload } from './types';
import { AxiosResponse } from 'axios';
import axiosClient from '../api';

export const authService = {
  login(payload: ILoginPayload): Promise<AxiosResponse> {
    const resutlt = axiosClient.post('', payload);
    return resutlt;
  }
};
