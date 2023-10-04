# Debouncing

- Typing slow = 200ms; Typing fast = 30ms;

- Performance
  - iphone pro max = 14 letters \* 1000 = 14000
  - with debouncing = 3 API calls \*1000 = 3000
  - Debouncing with 200ms
    - if difference bet.n 2 key strokes is < 200ms - DECLINE API CALL
    - if difference bwt.n 2 key strokes is > 200ms make an API CALL

# Building Live chat

      - Challenges of Live Chat
          - Get Data live.
          - Update The UI.

- Data Live

  - WEB SOCKETS :- It is a two way handshake connection bet.n a server and UI. We can quickly send data from either sides. [NO INTERVAL]
  - LONG POLLING (OR) API POLLING :- The data flows from server to UI after an INTERVAL.

- EXAMPLES

  - Trading, What's app sites - WEB SOCKETS
  - G-mail, Youtube - API POLLING
