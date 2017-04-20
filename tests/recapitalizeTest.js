const recapitalize=require('../recapitalize')
const tape=require('tape')

const testCols=['camelCase','someThinElse','something']
const testObjects=[
  {
    camelcase:1,
    somethinelse:'1a',
    something:'1b'
  },
  {
    camelcase:2,
    somethinelse:'2a',
    something:'2b'
  },
  {
    camelcase:3,
    somethinelse:'3a',
    something:'3b'
  }
]
const expectedObjects=[
  {
    camelCase:1,
    someThinElse:'1a',
    something:'1b'
  },
  {
    camelCase:2,
    someThinElse:'2a',
    something:'2b'
  },
  {
    camelCase:3,
    someThinElse:'3a',
    something:'3b'
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