from flask_bootstrap import Bootstrap5
from flask import Flask, render_template, request, url_for
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SECRET_KEY'] = 'Key'

##CREATE DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ProjectM2Database.db'
db = SQLAlchemy()
db.init_app(app)


##CREATE TABLE
class Student(db.Model):
    sid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    m2coins = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)

class StudentCourseBridge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sid = db.Column(db.Integer, db.ForeignKey("Student.sid"))
    course_id = db.Column(db.Integer, db.ForeignKey("Course.course_id"))
    score = db.Column(db.Integer),
    progess = db.Column(db.Integer)
    status = db.Column(db.String, nullable=False)

class Course(db.Model):
    course_id = db.Column(db.Integer, primary_key=True)
    course_title = db.Column(db.String, unique=True, nullable=False)
    course_desc = db.Column(db.String, nullable=False)
    course_img = db.Column(db.String, nullable=True)


with app.app_context():
    db.create_all()

