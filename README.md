# form.l
utility functions for forms, including functions, formatters, normalizers, sanitizers, sorters, and validations.

## Functions

**diff(baseObj = object, targetObj = object)** - deep difference between two objects. Uses lodash's transform, isEqual, isObject.
```
import ifValidText from 'form.l/lib/functions/ifValidText'

const objA = {a: 1, b: { c: 1, d: 0 }, e: 0}
const objB = {a: 1, b: { c: 1, d: 1 }, e: 1}

const objC = diff(objA, objB)  // => { b: { d: 1 }, e: 1 }
```

**ifValidText(text = str, arr = [func])** - returns function(txt). if array of functions are true , it returns defined text, else it returns undefined. Useful for validation functions.
```
import ifValidText from 'form.l/lib/functions/ifValidText'

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
import includePrefix from 'form.l/lib/formatters/includePrefix'

const currencyPrefix = includePrefix('$')

const result = currencyPrefix('100') // => '$100'
```

**includeSuffix(suffix = string)** - returns function(str) to add suffix to end of str. Useful for percentages.
```
import includeSuffix from 'form.l/lib/formatters/includeSuffix'

const percentagePrefix = includeSuffix('$')

const result = percentagePrefix('100') // => '100%'
```

## Parsers
Parsers parse strings, returning a string that conforms to a certain pattern.

**regFind(rgx, num = 0)** - returns function(str) to parse string with regex. Use num to tell function which array index should be returned.
```
import regFind from 'form.l/lib/parsers/regFind'

const trimZeros = regFind(/^0*(\d*)/,  1)

const result = trimZeros('00001111mmm') // => '1111'
```

**regReplace(rgx, str = '')** - returns function(str) to replace strings with regex. Use str to tell function what to replace found matches with.
```
import regReplace from 'form.l/lib/parsers/regReplace'

const trimZeros = regReplace(/^0*(\d*)/,  'h')

const result = trimZeros('00001111mmm') // => 'hmmm'
```

## Sanitizers
Sanitizers are functions to clean data, either while getting from database to use in a form, or to ready data for posting to a database.

## Sorters
Sorters are functions to sort list arrays.

**sortRegex(rgx, min = 0, max = 0, func)** - returns function(arr = [], order = 'asc') for sorting to apply func to sliced matches of the regex. Useful to apply
```
import sortRegex from 'form.l/lib/sorters/sortRegex'

import toNumber from 'lodash/toNumber'
import padStart from 'lodash/padStart'

const ltrNum = new RegExp(/(\D*)(\d*)/, 'i')
const sortTxtandNum = a => a.map(m => (isNaN(toNumber(m)) ? m : padStart(m, 4, '0'))).join('')

export const sortStateAreas = sortRegex(ltrNum, 1, 3, sortTxtandNum)

const result = sortStateAreas(['CA11', 'BC02', 'BC01', 'CB01']) // => ['BC01', 'BC02', 'CA11', 'CB01']
```

## Validations
Validations will return a boolean if data is valid. Used mostly to validate field data, but might be used across form data.

**ifBlank(str)** - returns true if str is blank ('').
```
import ifBlank from 'form.l/lib/validations/ifBlank'

const result = ifBlank('') // => true
const result2 = ifBlank('true') // => false
```

**ifRegex(rgx)** - returns function(str) that returns true if rgx finds a match within str.
```
import ifRegex from 'form.l/lib/validations/ifRegex'

const ltrnum = ifRegex(/(\D*)(\d*)/) // => true

const result = ltrnum('CA10') // => true
const result2 = ltrnum('10CA') // => false
```

**ifYear(year, range = 0)** - returns function(str) if str is a year between 'year' and 'year plus range'.
```
import ifYear from 'form.l/lib/validations/ifYear'

const year2000 = ifYear(2000, 1) // => true

const result = year2000('10/11/2000') // => true
const result2 = year2000('10/11/2001') // => false
```