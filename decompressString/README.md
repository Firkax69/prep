**String decompressor**

Will be performed using Stack.

Our decompression algorithm follows a nested structure where substrings inside [...] need to be processed recursively. A stack is an ideal data structure for handling this because:

Last In, First Out (LIFO) Property – The most recent [ bracket should be closed first when encountering ].
Tracking Nested States – We store:
Previous string states (stack stores incomplete substrings before [).
Repetition counts (numStack stores how many times a substring should be repeated).
Without a stack, handling deeply nested patterns like "2[3[a]b]" would be difficult.

