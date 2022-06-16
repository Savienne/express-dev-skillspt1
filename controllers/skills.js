// import { skills } from '../data/skills-data.js'
import { Skill } from '../models/skills.js'

function deleteSkills(req, res) {
    Skill.findByIdAndDelete(req.params.id)
    .then(skills => {
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
  }
  

// function index(req, res) {
//     console.log(req.time, 'req.time')
//     Skills.find({})
//     .then(skills => {
//       res.render('skills/index', {
//         skills: skills,
//         time: req.time
//       })
//     })
//     .catch(error => {
//       console.log(error)
//       res.redirect('/')
//     })
//   }


// function updatSkill(req, res){
//     Skills.findByIdAndUpdate(req.params.id, req.body)
//     .then(skill => {
//         res.render('skills/show', {
//             skill:skill
//         })
//     })
//     .catch(error => {
//         console.log(error)
//         red.redirect('/skills')
//     })
// }

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
        res.redirect('/')
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
    Skill.create(req.body)
    .then(skills => {
        console.log(skills)
        res.redirect('/skills')
    })
}

    

export {
    index,
    newSkills as new,
    create,
    show,
    deleteSkills as delete,
    }