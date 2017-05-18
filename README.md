# recapitalizer
Databases are sometimes particular about capitalization. One way to deal with this is to make all db objects lowercase, while keeping the capitalization elsewhere.

This module provides two simple functions for that.

##single(object,column)
take an object with all-lowercase or snake-case fields, and a list of those fields camelCased, and return the object with camelCased fields

### parameters
| name | description |
| --- | --- |
| object | an object with all-lowercase fields |
| column | a list of those fields camelCased |

### returns
an object with camelCased fields

### example
```javascript
const recapitalizer=require('recapitalizer')
let rawObj={
    lowercase:1,
    snake_case:2
}
let camelColumns=['lowerCase','snakeCase']
recapitalizer.single(rawObj,camelColumns)
//output: { "lowerCase":1,"snakeCase":2 }
```

##multiple(objects,column)
take a list of objects with all-lowercase or snake-case fields, and a list of those fields camelCased, and returns a list of the objects with camelCased fields

### parameters
| name | description |
| --- | --- |
| objects | a list of objects with all-lowercase fields |
| column | a list of those fields camelCased |

### returns
a list of the objects with camelCased fields

### example
```javascript
const recapitalizer=require('recapitalizer')
let rawObjList=[{
  lowercase:1a,
  snake_case:2a
  },{
  lowercase:1b,
  snake_case:2b
  }]
let camelColumns=['lowerCase','snakeCase']
recapitalizer.single(rawObj,camelColumns)
/*
output:
[{
  lowerCase:1a,
  snakeCase:2a
  },{
  lowerCase:1b,
  snakeCase:2b
}]
*/
```