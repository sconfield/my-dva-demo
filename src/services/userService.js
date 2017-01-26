import request from '../utils/request';

export async function query(url) {
  return request(url);
}
