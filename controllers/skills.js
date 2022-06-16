import { skills } from '../data/skills-data.js'
import { Skill } from '../models/skills.js'

function index(req,res) {
    Skill.find({})
    .then(skills => {
        console.log(skills)
        res.render('skills/index', {
            skills: skills
            // res.redirect('/')
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
    })
}

function newSkills(req, res) {
    res.render('skills/new')
}

function show(req, res) {
    Skills.findById(req.params.id)
    .then(skills => {
        res.render('skills/show', {
            skills: skills
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
    })
}
function create(req, res){
    console.log(req.body)
    Skill.create(req.body)
    .then(Skill => {
        res.redirect('/skills')
    })
}

export {
    index,
    newSkills as new,
    create,
    show,
    }