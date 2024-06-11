# blueprint/routes for the note table
from flask import Blueprint, jsonify, request

# import the model for this blueprint
from DnD.models import User

# import database
from DnD.config.database_extension import db

#import flask_bcrypt
from flask_bcrypt import Bcrypt

#initialize flask_bcrypt
bcrypt = Bcrypt()

# initialize the blueprint named notes
user_bp = Blueprint('user', __name__)

# ROUTES
# try except is like try catch, Exception is all the errors, the as a variable helps to do something with the error.

# GET route
@user_bp.route('/users', methods=['GET'])
# get all notes and turn it in a json object
def get_users():
    
    try:
        results = User.query.all()
        # itierates through the results object, then gets the attributes and puts them in a list using a method defined in the model
        user_data = [result.to_dict() for result in results]
        return jsonify(user_data)
        
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to retrieve users'}), 500
    

# POST route
@user_bp.route('/users', methods=['POST'])
# post a new note
def new_user():
    try:
        data = request.get_json() #get_json gets the json request.
        new_user = User(**data)  # the ** unpacks the dictionary data and passes its key value pairs as arguments 
        db.session.add(new_user)
        db.session.commit()
        # print('testing what new_user looks like: ', new_user)
        return jsonify(new_user.to_dict()) #returns the new_user
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to create user'}), 500