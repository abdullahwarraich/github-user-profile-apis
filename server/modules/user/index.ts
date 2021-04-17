import { Request } from 'express'
const { gitHubUser } = require('../../services/github')

export const gitHubUserDetails = async (req: Request) => {
  const { userName } = req.params
  return await gitHubUser(userName)
}

export const gitHubUserGists = async (req: Request) => {
  const { userName } = req.params
  return await gitHubUser(userName, 'gists')
}

export const gitHubUserOrgs = async (req: Request) => {
  const { userName } = req.params
  return await gitHubUser(userName, 'orgs')
}
