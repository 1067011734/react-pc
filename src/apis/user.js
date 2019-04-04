import { wrapRequest } from './_utils';

export const getUserData = wrapRequest('getUser', {
    mock: true,
  });
