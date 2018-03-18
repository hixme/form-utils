# form.l
utility functions for forms, including functions, formatters, normalizers, sanitizers, sorters, and validations.

## Functions

**diff(baseObj = object, targetObj = object)** - deep difference between two objects. Uses lodash's transform, isEqual, isObject.
**ifValidText(text = str, arr = [func])** - returns text if array of functions all return true. Useful for validation functions.

## Formatters
Formatters in this context, formats string and returns it. (eg., a formatter for dollar amount would take a string like "789" and return "$789")

**includePrefix(prefix = string)** - returns function(str) to add prefix to beginning of str. Useful for currency (eg., '123' -> '$123')
**includeSuffix(suffix = string)** - returns function(str) to add suffix to end of str. Useful for percentages.(eg., '100' -> '100%')

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
