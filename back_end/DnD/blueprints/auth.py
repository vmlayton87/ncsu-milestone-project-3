# blueprint/routes for the note table
from flask import Blueprint, jsonify, request

#import JWT library
from flask_jwt_extended import create_access_token

#Import datetime
from datetime import datetime, timedelta, timezone

# import the model for this blueprint
from ..models.user import User

# import database
from .. import db

#import flask_bcrypt
from flask_bcrypt import Bcrypt

#initialize flask_bcrypt
bcrypt = Bcrypt()

#initialize the blueprint named notes
auth_bp = Blueprint('auth', __name__, url_prefix = '/auth')

# ROUTES
@auth_bp.route('/register', methods=['POST'])
def register():
    try:
      data = request.get_json()

      #check if user exists
      existing_username = User.query.filter_by(user_name=data['username']).first()
      if existing_username:
        return jsonify({'error': 'Username already exists'}), 400
      
      #check if email exists
      existing_email = User.query.filter_by(email=data['email']).first()
      if existing_email:
        return jsonify({'error': 'Email already exists'}), 400
      
      #hash the password
      hashed_password = bcrypt.generate_password_hash(data['password'], 12).decode('utf-8')

      #create new user
      new_user = User(user_name=data['username'], email=data['email'], hashed_password=hashed_password)

      #add and commit new user to db
      db.session.add(new_user)
      db.session.commit()

      #return success
      return jsonify({'message': 'User registered successfully'})
    except Exception as err:
      #return error
      print(f"Error: {err}")
      return jsonify({'error': 'Failed to register user'}), 500


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(user_name=data['username']).first()
    if user and bcrypt.check_password_hash(user.hashed_password, data['password']):
        # Set the expiration time to 7 days from the current time
        expires = timedelta(hours=24*7)
        access_token = create_access_token(identity={'userId': user.id, 'username': user.user_name, 'email': user.email}, expires_delta= expires)
        return jsonify({'access_token': access_token})
    else:
        return jsonify({'message': 'Invalid credentials'}), 401