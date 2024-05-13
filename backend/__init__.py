from flask import (
    Flask, render_template, jsonify, redirect, render_template, request, session, url_for
)
from . import Solution

app = Flask(__name__)
obj = Solution.Solution()


@app.route('/',  methods=('GET', 'POST'))
def index():
    solutions = {'Data': 'none'}
    if request.method == 'POST':
        # print(request.form['inputQueen'])
        Nqueen = request.form['inputQueen']
        error = None
        if not Nqueen:
            error = 'N is required.'

        if error is None:
            obj = Solution.Solution()
            solutions = obj.solveNQueens(int(Nqueen))
            return render_template('index.html', solutions=solutions)

    return render_template('index.html', solutions=solutions)


@app.route('/solutions', methods=['POST'])
def get_solutions():
    data = request.get_json()
    Nqueen = data['inputQueen']
    # Nqueen = 5
    solutions = obj.solveNQueens(int(Nqueen))
    return jsonify({'solutions': solutions})

