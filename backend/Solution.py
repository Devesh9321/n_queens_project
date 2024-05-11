# Python module for solving N Queen's Problem

class Solution:
    def isSafe(self, row, col, board, n):
        # Check upper-left diagonal
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 'Q':
                return False
        
        # Check left
        for j in range(col, -1, -1):
            if board[row][j] == 'Q':
                return False
        
        # Check lower-left diagonal
        for i, j in zip(range(row, n), range(col, -1, -1)):
            if board[i][j] == 'Q':
                return False
        
        return True

    def solve(self, col, board, ans, n):
        if col == n:
            ans.append(list(board))
            return

        for row in range(n):
            if self.isSafe(row, col, board, n):
                board[row] = board[row][:col] + 'Q' + board[row][col+1:]
                self.solve(col + 1, board, ans, n)
                board[row] = board[row][:col] + '.' + board[row][col+1:]

    def solveNQueens(self, n):
        ans = []
        board = ['.' * n for _ in range(n)]
        self.solve(0, board, ans, n)
        return ans

# n = 4
# obj = Solution()
# ans = obj.solveNQueens(n)

# for idx, solution in enumerate(ans):
#     print(f"Arrangement {idx+1}:")
#     for row in solution:
#         print(row)
#     print()
