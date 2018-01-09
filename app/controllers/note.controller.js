// Note Model
const Note = require('../models/note');

module.exports = {
    notes: notes,
    create: create,
    update: update,
    destroy: destroy
}

// Return all notes [Specif User]
function notes(req, res){
    Note.find({user_id: req.user._id},(err, notes) => {
        if(err){
            res.send(err);
        }else{
            res.json({message: "All notes", data: notes })
        }
    })
}

// Create new note
function create(req, res){
    const note = new Note();

    note.title = req.body.title;
    note.body = req.body.body;
    note.user_id = req.user._id;

    note.save((err, note) => {
        if(err){
            res.send(err);
        }else{
            res.status(201);           
            res.json({message: "new Noted added successfully", data: note})
        }
    })

}


// Update user specific note 
function update(req, res){
    Note.findOne({_id: req.params.note_id, user_id: req.user._id}, function (err, note) {
        if(err){
            res.send(err);
        }else{

            if(note){
                if(req.body.title){
                    note.title = req.body.title;
                }
    
                if(req.body.body){
                    note.body = req.body.body;
                }
    
                note.save((err, note) => {
                    if(err){
                        res.send(err);
                    }else{
                        res.json({message: "Noted updated successfully", data: note});
                    }
                });
            }else{
                res.json({message: "Your Request not found!!", data: note});
            }

        }

    });
}



// Delete Note
function destroy(req, res){
    Note.remove({_id: req.params.note_id, user_id: req.user._id}, (err) => {
        if(err){
            res.send(err);
        }else{
            res.json({message: "Note deleted successfully"});
        }
    })
}