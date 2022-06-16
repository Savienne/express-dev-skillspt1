import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
import { skills } from '../data/skills-data.js'
const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/skills/new')
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.get('/new')
export {
 router
}
