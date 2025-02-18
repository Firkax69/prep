**String decompressor**

Will be performed using Stack.

Our decompression algorithm follows a nested structure where substrings inside [...] need to be processed recursively. A stack is an ideal data structure for handling this because:

Last In, First Out (LIFO) Property – The most recent [ bracket should be closed first when encountering ].
Tracking Nested States – We store:
Previous string states (stack stores incomplete substrings before [).
Repetition counts (numStack stores how many times a substring should be repeated).
Without a stack, handling deeply nested patterns like "2[3[a]b]" would be difficult.

We use two stacks:

    stack: Stores previous string states.
    numStack: Stores repetition counts.
These stacks help us handle nested repetitions.

Before ] appears:
Each time we see [, we:

    Push currentStr to stack (saves previous state).
    Push currentNum to numStack (saves repeat count).
    Reset currentStr and currentNum for the new substring.

When ] appears:
    Pop numStack to get the repeat count.
    Pop stack to restore previous string.
    Repeat currentStr repeatCount times and concatenate it with lastStr
