**Step 1: Checking If a Sequence is a Word Square**

This function validates if a given set of words forms a word square.

"words" should always be an array of strings

i represents rows in the word square.
j represents columns in the word square.

🔹 Example to Understand It

B A L L
A R E A
L E A D
L A D Y

Here, K = 4 (each word has 4 letters, and there are 4 words).

i   j   words[i][j]         words[j][i]         Match?
0	0	'B' (Row 1, Col 1)	'B' (Col 1, Row 1)	✅ Yes
0	1	'A' (Row 1, Col 2)	'A' (Col 2, Row 1)	✅ Yes
0	2	'L' (Row 1, Col 3)	'L' (Col 3, Row 1)	✅ Yes
0	3	'L' (Row 1, Col 4)	'L' (Col 4, Row 1)	✅ Yes
1	0	'A' (Row 2, Col 1)	'A' (Col 1, Row 2)	✅ Yes
1	1	'R' (Row 2, Col 2)	'R' (Col 2, Row 2)	✅ Yes
1	2	'E' (Row 2, Col 3)	'E' (Col 3, Row 2)	✅ Yes
1	3	'A' (Row 2, Col 4)	'A' (Col 4, Row 2)	✅ Yes
2	0	'L' (Row 3, Col 1)	'L' (Col 1, Row 3)	✅ Yes
2	1	'E' (Row 3, Col 2)	'E' (Col 2, Row 3)	✅ Yes
2	2	'A' (Row 3, Col 3)	'A' (Col 3, Row 3)	✅ Yes
2	3	'D' (Row 3, Col 4)	'D' (Col 4, Row 3)	✅ Yes
3	0	'L' (Row 4, Col 1)	'L' (Col 1, Row 4)	✅ Yes
3	1	'A' (Row 4, Col 2)	'A' (Col 2, Row 4)	✅ Yes
3	2	'D' (Row 4, Col 3)	'D' (Col 3, Row 4)	✅ Yes
3	3	'Y' (Row 4, Col 4)	'Y' (Col 4, Row 4)	✅ Yes

✅ Everything matches, so the function returns true.

**Step 2: Prefix Map function**

This function prepares a prefix map, which is a dictionary that helps us quickly find words that start with a given prefix.
For example, if we have ["AREA", "BALL", "DEAR", "LADY", "LEAD", "YARD"], it builds:

A -> [AREA]
AR -> [AREA]
ARE -> [AREA]
AREA -> [AREA]

B -> [BALL]
BA -> [BALL]
BAL -> [BALL]
BALL -> [BALL]

...

This reduces the number of words we check, making the algorithm faster.



