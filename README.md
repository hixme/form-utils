# form.l
utility functions for forms, including functions, formatters, normalizers, sanitizers, sorters, and validations.

## Functions

**diff(baseObj = object, targetObj = object)** - deep difference between two objects. Uses lodash's transform, isEqual, isObject.
```
const objA = {a: 1, b: { c: 1, d: 0 }, e: 0}
const objB = {a: 1, b: { c: 1, d: 1 }, e: 1}

const objC = diff(objA, objB)  // => { b: { d: 1 }, e: 1 }
```

**ifValidText(text = str, arr = [func])** - returns function(txt). if array of functions are true , it returns defined text, else it returns undefined. Useful for validation functions.
```
const includesText = (txt) => txt.includes('Match me.')
const isThisText = (txt) => txt === 'Match me.'
const validIncludeText = ifValidText('I include text.', [includesText])
const validText = ifValidText('I'm valid.', [includesText, isThisText])

const result = validIncludeText('Match me. Match you.') // => "I include text."
const result2 = validText('Match me.') // => "I'm valid."
const result3 = validText('Match me. Match you.') // => undefined
```

## Formatters
Formatters in this context, formats string and returns it.

**includePrefix(prefix = string)** - returns function(str) to add prefix to beginning of str. Useful for currency.
```
const currencyPrefix = includePrefix('$')

const result = currencyPrefix('100') // => '$100'
```

**includeSuffix(suffix = string)** - returns function(str) to add suffix to end of str. Useful for percentages.
```
const percentagePrefix = includeSuffix('$')

const result = percentagePrefix('100') // => '100%'
```

## Parsers
Parsers in this context, filters characters from a string that do not match patterns, returning a string that conforms to a certain pattern. (eg., a normalizer for a string that could convert to a integer would take a string like "m&78.9" and return "789")

**regFind(rgx, num = 0)** - returns function(str) to parse string with regex. Use num to tell function which array index should be returned.

**regReplace(rgx, str = '')** - returns function(str) to replace strings with regex. Use str to tell function what to replace found matches with.

## Sanitizers
Sanitizers are functions to clean data, either while getting from database to use in a form, or to ready data for posting to a database.

## Sorters
Sorters are functions to sort list arrays.

**sortRegex(rgx, min = 0, max = 0, func)** - returns function(arr = [], order = 'asc') for sorting to apply func to sliced matches of the regex. Useful to apply

## Validations
Validations will return a boolean if data is valid. Used mostly to validate field data, but might be used across form data.

**ifBlank(str)** - returns true if str is blank ('').

**ifRegex(rgx)** - returns function(str) that returns true if rgx finds a match within str.

**ifYear(year, range = 0)** - returns function(str) if str is a year between 'year' and 'year plus range'.
