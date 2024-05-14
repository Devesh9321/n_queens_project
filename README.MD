
# N-Queens Solver

This is a simple web application that allows you to solve the N-Queens problem. You can input the value of N, and the application will provide you with the solutions for placing N queens on an N×N chessboard such that no two queens attack each other.

## How to Use

1. Clone or download this repository to your local machine.

2. Ensure you have Python and Flask installed on your machine. Setup the Packages :
   ```
   pip install -r requirements.txt
   ```

3. Run the Flask application:
   ```
   python run.py
   ```

4. Open your web browser and navigate to `http://localhost:5000`.

5. Enter the value of N in the input field and click the "Solve" button.

6. The solutions for the N-Queens problem will be displayed in the browser console.

## Files

- `run.py`: Flask application file containing route definitions.
- `templates/index.html`: HTML template file containing the form for inputting N.
- `static/script.js`: JavaScript file containing the client-side code for form submission and handling responses.

## Dependencies

- Flask: A micro web framework for Python.
- JavaScript Fetch API: A modern web API for making asynchronous HTTP requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
