from flask import Flask, render_template, request, url_for, jsonify
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
    age_group = db.Column(db.String, nullable=False)

class StudentCourseBridge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sid = db.Column(db.Integer)
    course_id = db.Column(db.Integer)
    score = db.Column(db.Integer)
    progress = db.Column(db.Integer)
    status = db.Column(db.String, nullable=False)

with app.app_context():
    db.create_all()


# with app.app_context():
    # student1 = Student(
    #     sid=1,
    #     name="Chan Tai Ming",
    #     m2coins=100,
    #     email="peterchan@school.hk.com",
    #     password="team7isthebest",
    #     age_group = "F1-F3"
    # )
    # student1course1 = StudentCourseBridge(
    #     id=4,
    #     sid=2,
    #     course_id=1,
    #     score=80,
    #     progress=80,
    #     status="Finished"
    # )
    #
    # db.session.add(student1)
    # db.session.add(student1course1)
    #
    # db.session.commit()


@app.route("/studentinfo/<int:sid>")
def getStudentInfo(sid):
  student = db.get_or_404(Student, sid)
  print(student)
  return_json = {
      "coin" : student.m2coins,
      "name" : student.name,
      "age_group" : student.age_group
  }
  print(return_json)

  return jsonify(return_json)

if __name__ == '__main__':
    app.run(debug=True)
