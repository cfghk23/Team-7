from flask import Flask, render_template, request, url_for
from flask_sqlalchemy import SQLAlchemy
import requests


app = Flask(__name__)
app.config['SECRET_KEY'] = '8BYkEfBA6O6donzWlSihBXox7C0sKR68'

##CREATE DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///admin.db'
db = SQLAlchemy()
db.init_app(app)


##CREATE TABLE
class Course(db.Model):
    course_id = db.Column(db.Integer, primary_key=True)
    course_title = db.Column(db.String, unique=True, nullable=False)
    course_desc = db.Column(db.String, nullable=False)
    course_img = db.Column(db.String, nullable=True)

with app.app_context():
    db.create_all()

# with app.app_context():
#     course1 = Course(
#         course_title="FQ Explorer (Suitable for Age 8-12)",
#         course_desc="FQ Explorer teaches not only financial education concepts but also integrates the essence of value education throughout the lesson and discussion guide. Going through the self-directed experiential learning experience, students can improve their problem-solving skills and develop the ability to make decisions in moral dilemmas. FQ Explorer has 10 modules in total: How can I make the best choice for me, the importance of savings, allowances and spending plans, the influence of advertising, income and careers, why we need credit, banking, what is insurance, investing,  and donation and charities."
#     )
#     course2 = Course(
#         course_title="Money Fundamentals",
#         course_desc="You will learn about money fundamentals and history through animations and stories."
#     )
#     db.session.add(course1)
#     db.session.add(course2)
#     db.session.commit()

# def GetAllCourses():
    with app.app_context():
        result = db.session.execute(db.select(Course))
        all_courses = result.scalars().all()
        # returns a list of course objects
        # return all_courses
        for course in all_courses:
            print(f"Title: {course.course_title}")
        print(result)

# def addNewCourse():
#     title = request.form['title']
#     desc = request.form['description']
#     with app.app_context():
#         new_course = Course(
#             course_title=title,
#             course_desc=desc,
#         )
#         db.session.add(new_course)
#         db.session.commit()
#
# # def




@app.route("/")
def GetCourse():
    course = db.get_or_404(Course, 1)
    print(course.course_title)
    return course


if __name__ == '__main__':
    app.run(debug=True)
