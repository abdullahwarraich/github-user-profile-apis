import { Request, Response } from 'express'
import express from 'express'
import { userDetails, userGists, userOrgs, userRepos } from '../controllers/user'

const router = express.Router()

/* check server status. */
router.get('/', (req: Request, res: Response) => res.send({ status: 'OK' }))

router.get('/user/:userName', userDetails)
router.get('/user/:userName/gists', userGists)
router.get('/user/:userName/orgs', userOrgs)
router.get('/user/:userName/repos', userRepos)

export default router
