import axios from 'axios'

const GET = async url => {
  const { data } = await axios.get(url)
  return data
}

export { GET }
