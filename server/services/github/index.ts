import { GET } from '../../utils/request'
const { GITHUB_API_URL } = process.env

export const gitHubUser = async (userName, extendedUrl = '') =>
  GET(
    `${GITHUB_API_URL}/users/${userName}${extendedUrl ? `/${extendedUrl}` : ``}`
  )
