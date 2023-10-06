from flask_bootstrap import Bootstrap5
from flask import Flask, render_template, request, url_for
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SECRET_KEY'] = '8BYkEfBA6O6donzWlSihBXox7C0sKR6b'
Bootstrap5(app)

##CREATE DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ProjectM2.db'
db = SQLAlchemy()
db.init_app(app)


##CREATE TABLE
class Student(db.Model):
    sid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    m2coins = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String, nullable=False)
    courses_avail = db.Column(db.String, nullable=True)
    courses_ongoing = db.Column(db.String, nullable=True)
    grade = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)

with app.app_context():
    db.create_all()

class Teacher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    school = db.Column(db.String, nullable=False)
    grade = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)

# with app.app_context():
#     student1 = Student(
#         name="student1",
#         m2coins=100,
#         email="student1@school.hk.com",
#         courses_avail="FQ Explorer, Money Fundamentals",
#         courses_ongoing="Money Fundamentals",
#         grade="P6"
#     )
#     db.session.add(student1)
#     db.session.commit()

