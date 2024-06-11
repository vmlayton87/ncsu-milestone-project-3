# blueprint/routes for the note table
from flask import Blueprint, jsonify, request

#import JWT library
from flask_jwt_extended import create_access_token

# import the model for this blueprint
from DnD.models import User

# import database
from DnD.config.database_extension import db

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
      hashed_password = bcrypt.generate_password_hash(data['password'], 12)
      new_user = User(user_name=data['username'], email=data['email'], hashed_password=hashed_password)
      db.session.add(new_user)
      db.session.commit()
      return jsonify({'message': 'User registered successfully'})
    except Exception as err:
      print(f"Error: {err}")
      return jsonify({'error': 'Failed to register user'}), 500


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(user_name=data['username']).first()
    if user and bcrypt.check_password_hash(user.hashed_password, data['password']):
        access_token = create_access_token(identity={'userId': user.id, 'username': user.user_name, 'email': user.email})
        return jsonify({'access_token': access_token})
    else:
        return jsonify({'message': 'Invalid credentials'}), 401