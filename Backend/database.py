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

class Course(db.Model):
    course_id = db.Column(db.Integer, primary_key=True)
    course_title = db.Column(db.String, unique=True, nullable=False)
    course_desc = db.Column(db.String, nullable=False)
    course_img = db.Column(db.String, nullable=True)

class Teacher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    school = db.Column(db.String, nullable=False)
    grade = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)

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

@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    # Query the database to check if the student exists
    student = Student.query.filter_by(email=email).first()

    if student and student.password == password:
        # Authentication successful
        return jsonify({'message': 'Login successful'})
    else:
        # Authentication failed
        return jsonify({'message': 'Invalid email or password'})


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

@app.route("/studentprogress/<int:sid>")
def getStudentProgress(sid):
    studentProgress = db.get_or_404(StudentCourseBridge, sid) 

    return_json = studentProgress
    print(return_json)

    return jsonify(return_json)


# dashboard for score
@app.route('/average_score/<int:course_id>')
def average_score(course_id):
    course = Course.query.get(course_id)

    if not course:
        return jsonify({'message': 'Course not found'})

    scores = [scb.score for scb in course.students if scb.score is not None]
    if len(scores) == 0:
        return jsonify({'message': 'No scores available for this course'})

    average = sum(scores) / len(scores)
    return jsonify({'average_score': average})

if __name__ == '__main__':
    app.run(debug=True)
