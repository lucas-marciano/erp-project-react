import { action } from 'typesafe-actions';
import { Repository, RepositoriesTypes } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSucces = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCES, { data });

export const loadFailure = (message: string) => action(RepositoriesTypes.LOAD_FAILURE, message);
