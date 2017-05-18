const recapitalize=require('../recapitalize')
const tape=require('tape')

const testCols=['camelCase','someThinElse','something','snakeCase']
const testObjects=[
  {
    camelcase:1,
    somethinelse:'1a',
    something:'1b',
    snake_case:'1c'
  },
  {
    camelcase:2,
    somethinelse:'2a',
    something:'2b',
    snake_case:'2c'
  },
  {
    camelcase:3,
    somethinelse:'3a',
    something:'3b',
    snake_case:'3c'
  }
]
const expectedObjects=[
  {
    camelCase:1,
    someThinElse:'1a',
    something:'1b',
    snakeCase:'1c'
  },
  {
    camelCase:2,
    someThinElse:'2a',
    something:'2b',
    snakeCase:'2c'
  },
  {
    camelCase:3,
    someThinElse:'3a',
    something:'3b',
    snakeCase:'3c'
  }
]
tape('recapitalizes the selected columns',t=>{
  t.plan(1)
  let recapped=recapitalize.single(testObjects[0],testCols)
  t.deepEqual(recapped,expectedObjects[0],'should be an object with the correctly capitalized keys')
})

tape('bulk recapitalizes the selected columns',t=>{
  t.plan(1)
  let recapped=recapitalize.multiple(testObjects,testCols)
  t.deepEqual(recapped,expectedObjects,'should be an array of objects with the correctly capitalized keys')
})