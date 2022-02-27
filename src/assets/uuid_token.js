/* eslint-disable camelcase */
import { v4 as uuidv4 } from 'uuid'
export const getUUID = () => {
  let uuid_token = localStorage.getItem('UUIDTIKEN')
  if (!uuid_token) {
    uuid_token = uuidv4()
    localStorage.setItem('UUIDTIKEN', uuid_token)
  }
  return uuid_token
}
