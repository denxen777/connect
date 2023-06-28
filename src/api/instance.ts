import axios from 'axios';

const URL = 'https://social-network.samuraijs.com/api/1.0/';

export const instance = axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    'API-KEY': '60611e76-dd29-4405-9c67-fd1747a81f00',
  },
});
