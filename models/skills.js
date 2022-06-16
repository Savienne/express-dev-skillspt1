import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillsSchema = new Schema ({
    text: String,
    done: Boolean,
})

const Skill = mongoose.model('Skill', skillsSchema)

export {
    Skill
}