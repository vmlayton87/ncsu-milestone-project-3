# blueprint/routes for the note table
from flask import Blueprint, jsonify, request

# import the model for this blueprint
from ..models import User

# import database
from ..config import db

# initialize the blueprint named notes
user_bp = Blueprint('user', __name__, url_prefix='/users')

# ROUTES
# try except is like try catch, Exception is all the errors, the as a variable helps to do something with the error.

# test merge
# GET route
@user_bp.route('/', methods=['GET'])
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
    
# GET route for a single user
@user_bp.route('/<int:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user_data = User.query.get(user_id)     
        return jsonify(user_data.to_dict())
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to retrieve user'}), 500

# POST route
@user_bp.route('/', methods=['POST'])
# post a new user
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

# PUT route
@user_bp.route('/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json() #get_json gets the json request.
    
    try:
        User.query.filter_by(id=user_id).update(data)
        db.session.commit()
        updated_user = User.query.get(user_id)
        return jsonify(updated_user.to_dict())
    except Exception as err:
            print(f"Error: {err}")
            return jsonify({'error': 'Failed to update user'}), 500

# DELETE route
@user_bp.route('/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        User.query.filter_by(id=user_id).delete()
        db.session.commit()
        return jsonify({'message': 'User deleted successfully'})
    except Exception as err:
        print(f"Error: {err}")
        return jsonify({'error': 'Failed to delete user'}), 500
    