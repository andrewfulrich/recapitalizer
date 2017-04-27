# recapitalizer
Databases are sometimes particular about capitalization. One way to deal with this is to make all db objects lowercase, while keeping the capitalization elsewhere.

This module provides two simple functions for that.

##single(object,column)
take an object with all-lowercase fields, and a list of those fields camelCased, and return the object with camelCased fields

### parameters
| name | description |
| --- | --- |
| object | an object with all-lowercase fields |
| column | a list of those fields camelCased |

### returns
an object with camelCased fields

##multiple(objects,column)
take a list of objects with all-lowercase fields, and a list of those fields camelCased, and returns a list of the objects with camelCased fields

### parameters
| name | description |
| --- | --- |
| objects | a list of objects with all-lowercase fields |
| column | a list of those fields camelCased |

### returns
a list of the objects with camelCased fields