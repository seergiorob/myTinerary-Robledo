const Itineraries = require('../models/itineraries')

const commentsControllers = {

    addComment: async (req, res) => {
        console.log(req.user)
        console.log(req.body)
        try{
            const newComment = await Itineraries.findOneAndUpdate(
                {_id:req.params.itineraryId},
                {
                    $push:{
                        comments:{
                            comment: req.body.comment,
                            userID: req.user._id
                        }
                    }
                },
                {new:true}
            )
            res.json({success:true, response: newComment})
        }
        catch(error){
            res.json({success: false, error: error.message})
        }
    },
    getCommentByItinerary: async (req, res) => {
        try { 
            const Comments = await Itineraries.findById(req.params.itineraryId).populate("comments.userID", "firstName lastName profileurl")
            res.json({success:true, response: Comments})
        } catch (error) {
            res.json({success: false, error: error.message})
        }
    },
    deleteComment: async (req, res) => {
        try {
            const deleteComment = await Itineraries.findOneAndUpdate(
                {_id: req.params.itineraryId},
                {
                    $pull:{
                        comments: {_id: req.params.commentId}
                    }
                },
                {new:true}
            )
            res.json({success: true, response: deleteComment})
        } catch (error) {
            res.json({success: false, error: error.message})
        }
    },
    modifyComment: async (req, res) => {
        try {
            const modifyComment = await Itineraries.findOneAndUpdate(
                {"comments._id": req.body.commentId},
                {$set: {"comments.$.comment": req.body.comment}}, {new:true}
            )
            if(modifyComment){
                res.json({success:true, response: modifyComment.comments})
            }else{
                res.json({success:true, response: "We can't find your comment"})
            }
        } catch (error) {
            res.json({success: false, error: error.message})
        }
    }
}

module.exports = commentsControllers