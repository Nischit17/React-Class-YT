# Debouncing

- Typing slow = 200ms; Typing fast = 30ms;

- Performance
  - iphone pro max = 14 letters \* 1000 = 14000
  - with debouncing = 3 API calls \*1000 = 3000
  - Debouncing with 200ms
    - if difference bet.n 2 key strokes is < 200ms - DECLINE API CALL
    - if difference bwt.n 2 key strokes is > 200ms make an API CALL
