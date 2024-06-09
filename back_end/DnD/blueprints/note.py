# blueprint/routes for the note table
from flask import Blueprint, jsonify, request

# import the model for this blueprint
from DnD.models import Note

# import database
from DnD.config.database_extension import db

# initialize the blueprint named notes
note_bp = Blueprint('note', __name__)

# ROUTES
# try except is like try catch, Exception is all the errors, the as a variable helps to do something with the error.

# GET route
@note_bp.route('/notes', methods=['GET'])
# get all notes and turn it in a json object
def get_notes():
    
    try:
        results = Note.query.all()
        return jsonify(results)
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to retrieve notes'}), 500
    

# POST route
@note_bp.route('/notes', methods=['POST'])
# post a new note
def new_note():
    try:
        new_note = request() #get_json gets the json request.
        print('testing what new_note looks like: ', new_note)
        return new_note
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to create note'}), 500
    return 'Post notes route'

# PUT route
@note_bp.route('/notes', methods=['PUT'])
# update a note
def update_note():
    return 'Update notes route'

# DELETE route
@note_bp.route('/notes', methods=['DELETE'])
# delete a note
def delete_note():
    return 'Delete notes route'