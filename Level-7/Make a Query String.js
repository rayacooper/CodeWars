// Query string is a way to serialize object, which is used in HTTP requests. You may see it in URL:

// codewars.com/kata/search/?q=querystring
// The part q=querystring represents that parameter q has value querystring. 
// Also sometimes querystring used in HTTP POST body:

// POST /api/users
// Content-Type: application/x-www-form-urlencoded

// username=warrior&kyu=1&age=28
// The string username=warrior&kyu=1&age=28 represents an entity (user in this example) 
// with username equals warrior, kyu equals 1 and age equals 28. The entity may be represented as object:

// {
//   "username": "warrior",
//   "kyu": 1,
//   "age": 28
// }
// Sometimes there are more than one value for property:

// {
//   "name": "shirt",
//   "colors": [ "white", "black" ]
// }
// Then it represents as repeated param:

// name=shirt&colors=white&colors=black

// So, your task is to write a function that convert an object to query string:

// toQueryString({ foo: 1, bar: [ 2, 3 ] }) // => "foo=1&bar=2&bar=3"
// Next you may enjoy kata Objectify a URL Query String.

// Note: require has been disabled.


// This is my initial solution. I doesn't work because I forgot to account for
// the fact that some properties will have arrays as values.

function toQueryString (obj) {
    let ans = [];
    for (const property in obj) {
        ans.push(`${property}=${obj[property]}`); 
      }
    return ans.join('&');
  }