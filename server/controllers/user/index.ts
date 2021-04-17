import { Request, Response } from 'express'
import requestHandler from '../../utils/requestHandler'
import {
  gitHubUserDetails,
  gitHubUserGists,
  gitHubUserOrgs
} from '../../modules/user'

export const userDetails = async (req: Request, res: Response) =>
  requestHandler(req, res, gitHubUserDetails)

export const userGists = async (req: Request, res: Response) =>
  requestHandler(req, res, gitHubUserGists)

export const userOrgs = async (req: Request, res: Response) =>
  requestHandler(req, res, gitHubUserOrgs)
