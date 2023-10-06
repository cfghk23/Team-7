# Import Flask and jsonify
from flask import Flask, jsonify, request
from main import Student
# Create an app instance
app = Flask(__name__)

# Define a route for the login API
@app.route("/login", methods=["POST"])
def login():
    # Get the JSON data from the request
    data = request.get_json()
    # Check if the data is valid
    if data and "username" in data and "password" in data:
        # Get the username and password from the data
        username = data["username"]
        password = data["password"]
        # Check if the username and password match the database
        user = Student.query.filter_by(name=username.data, password=password.data).first()
        if user:
            # Return an OK response with a success message
            return jsonify({"message": "Login successful!"}), 200
        else:
            # Return a bad request response with an error message
            return jsonify({"message": "Invalid username or password!"}), 400
    else:
        # Return a bad request response with an error message
        return jsonify({"message": "Missing or invalid data!"}), 400

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
