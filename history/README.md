# History API

### [Demo](./demo.html)

History API is HTML5 API that enables us to modify or alter the history of the browser.

3 important methods of History api are namely
1. pushState
2. popState
3. replaceState

All 3 methods accept same 3 set of parameters:
```js
history.pushState([state data], [page title], [url]);
```

Now, ```page title``` parameter is not currently implemented in any of the browser.
But it would be a good practise to pass them so as to FutureProof your applications and API calls.

### Note
Reloading the Demo wont work if you have pushState mehtod push any URL's to your browser history