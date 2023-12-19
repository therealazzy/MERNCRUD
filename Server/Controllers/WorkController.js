const Work = require('../Models/WorksModel')
const mongoose = require('mongoose')

//get all works
const getWorks = async(req, res) => {
    const user_id = req.user._id


    const works = await Work.find({ user_id }).sort({createdAt: -1})
    
    res.status(200).json(works)
}

//get a single work
const getWork = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid ID'})
    }

    const work = await Work.findById(id)

    if (!work) {
        return res.status(404).json({error: 'Not Found'})
    }

    res.status(200).json(work)
}

//create a new work
const createWork = async (req, res) => {
    const {title, load} = req.body
    
    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'All fields must be provided', emptyFields})
    }
    //add doc to DB
    try{
        const user_id = req.user._id
        const work = await Work.create({title, load, user_id})
        res.status(200).json(work)
    } catch(err){
        res.status(400).json({message: err.message})
    }
}

//delete a single work
const deleteWork = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid ID'})
    }

    const work = await Work.findOneAndDelete({_id : id})

    if(!work) {
        return res.status(404).json({error: 'Does not exist'})
    }

    res.status(200).json(work)
}

//update a single work
const updateWork = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid ID'})
    }

    const work = await Work.findByIdAndUpdate({_id : id},{
        ...req.body
    })

    if(!work) {
        return res.status(404).json({error: 'Does not exist'})
    }

    res.status(200).json(work)
}


//export

module.exports = {
    getWorks,
    getWork,
    createWork,
    deleteWork,
    updateWork
}