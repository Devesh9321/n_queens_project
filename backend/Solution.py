class Solution:
    def isSafe(self, row, col, queens):
        for r, c in queens:
            if row == r or col == c or abs(row - r) == abs(col - c):
                return False
        return True

    def solve(self, col, queens, ans, n):
        if col == n:
            ans.append(queens[:])
            return

        for row in range(n):
            if self.isSafe(row, col, queens):
                queens.append((row, col))
                self.solve(col + 1, queens, ans, n)
                queens.pop()

    def solveNQueens(self, n):
        ans = []
        self.solve(0, [], ans, n)
        return ans
