from admin import db, app, Course

with app.app_context():
    course = db.get_or_404(Course, 1)
    print(course.course_title)
