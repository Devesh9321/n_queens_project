from flask import Flask,render_template,jsonify
from . import Solution

app = Flask(__name__)

@app.route('/')
def index():
    n = 4  # Board size
    obj = Solution.Solution()
    solutions = obj.solveNQueens(n)
    return render_template('index.html', solutions=jsonify(solutions))

# if __name__ == '__main__':
    # app.run(debug=True)


