# jq-bs-autosuggest
jQuery plugin for bootstrap autosuggest searches
## Usage
```javascript
$('#site-search').autosuggest({});
```
### Options
```javascript
$('#site-search').autosuggest({
    searchUrl: '/some/search/emdpoint?term=', // the search term is appended to whatever url you supply 
    minLength: 2                              // the minimum number of characters before a call to the endpoint is made
});
```
