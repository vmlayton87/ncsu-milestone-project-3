# blueprint/routes for the note table
from flask import Blueprint, jsonify, request

# import the model for this blueprint
from ..models import Note

# import database
from ..config import db

# initialize the blueprint named notes
note_bp = Blueprint('note', __name__, url_prefix='/notes')

# ROUTES
# try except is like try catch, Exception is all the errors, the as a variable helps to do something with the error.

# GET route
@note_bp.route('/', methods=['GET'])
# get all notes and turn it in a json object
def get_notes():
    
    try:
        results = Note.query.all()
        note_data = [result.to_dict() for result in results]
        return jsonify(note_data)
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to retrieve notes'}), 500
    
#Get notes belongs to a campaign
@note_bp.route('/<int:campaign_id>', methods=['GET'])
# get all notes and turn it in a json object
def get_campaign_notes(campaign_id):
    try:
        results = Note.query.filter_by(campaign_id=campaign_id).all()
        note_data = [result.to_dict() for result in results]
        return jsonify(note_data)
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to retrieve notes'}), 500
    

# POST route
@note_bp.route('/', methods=['POST'])
# post a new note
def new_note():
    try:
        data = request.get_json()
        new_note = Note(**data) # the ** unpacks the dictionary data and passes its key value pairs as arguments
        db.session.add(new_note)
        db.session.commit()
        return jsonify(new_note.to_dict())
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to create note'}), 500
    

# PUT route
@note_bp.route('/<int:note_id>', methods=['PUT'])
# update a note
def update_note(note_id):
    data = request.get_json() #get_json gets the json request.
    note = Note.query.get(note_id)
    try:
        Note.query.filter_by(id=note_id).update(data)
        db.session.commit()
        updated_note = Note.query.get(note_id)
        return jsonify(updated_note.to_dict())
    except Exception as err:
            print(f"Error: {err}")
            return jsonify({'error': 'Failed to update user'}), 500

# DELETE route
@note_bp.route('/<int:note_id>', methods=['DELETE'])

def delete_note(note_id):
    try:
        Note.query.filter_by(id=note_id).delete()
        db.session.commit()
        return jsonify({'message': 'Note deleted successfully'})
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to delete note'}), 500

    