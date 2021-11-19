from passlib.hash import bcrypt

def get_password_hash(password:str) :
    return (bcrypt.hash(password))

def verify_password(password:str, hashed:str) :
    return (bcrypt.verify(password, hashed))