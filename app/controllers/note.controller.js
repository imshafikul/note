// Note Model
const Note = require('../models/note');

module.exports = {
    notes: notes,
    create: create,
    update: update,
    destroy: destroy
}

function notes(req, res){
    Note.find((err, notes) => {
        if(err){
            res.send(err);
        }else{
            res.json({message: "All notes", data: notes })
        }
    })
}

function create(req, res){
    const note = new Note();

    note.title = req.body.title;
    note.body = req.body.body;

    note.save((err, note) => {
        if(err){
            res.send(err);
        }else{
            res.status(201);           
            res.json({message: "new Noted added successfully", data: note})
        }
    })

}


function update(req, res){
    Note.findById(req.params.note_id, (err, note) => {
        if(err){
            res.send(err);
        }else{
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


        }
    });
}


function destroy(req, res){
    Note.findByIdAndRemove(req.params.note_id, (err) => {
        if(err){
            res.send(err);
        }else{
            res.json({message: "Note deleted successfully"});
        }
    })
}