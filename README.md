# form.l
utility functions for forms, including functions, formatters, normalizers, sanitizers, and validations.

## Functions

**diff(baseObj, targetObj)** - deep difference between two objects.

## Formatters
Formatters in this context, formats string and returns it. (eg., a formatter for dollar amount would take a string like "789" and return "$789")

**prefix(prefix)** - returns function(str) to add prefix to beginning of str. Useful for currency (eg., '123' -> '$123')

## Normalizers
Normalizers in this context, filters characters from a string that do not match patterns, returning a string that conforms to a certain pattern. (eg., a normalizer for a string that could convert to a integer would take a string like "m&78.9" and return "789")

**regex(rgx, num = 0)** - returns function(str) to normalize string with regex. Use num to tell function which array index should be returned.

**currencyToDecimal(dec, symb = '$')** - returns function(str) to normalize a string that mimics currency (eg. "$123.45") that contains symb (default is '$')and returns a string that could convert to a decimal with the decimal value length (dec) (eg. "123.45")

## Sanitizers
Sanitizers are functions to clean data, either while getting from database to use in a form, or to ready data for posting to a database.

## Validations
Validations will return a boolean if data is valid. Used mostly to validate field data, but might be used across form data.
