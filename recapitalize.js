/**
 Recapitalizer

 take an object with all-lowercase fields, and a list of those fields camelCased, and return the object with camelCased fields
 this is useful because postgres doesn't do well with capitalization of things like column names so it's easiest to keep things all lowercase in the db

 Author: Andrew Ulrich

 MIT License

 Copyright (c) 2017 Andrew F. Ulrich

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

/**
 * take an object with all-lowercase fields, and a list of those fields camelCased, and return the object with camelCased fields
 * @param object
 * @param columns
 * @returns {*}
 */
function single(object,columns) {
  return columns.reduce((accum,curr)=>{
    accum[curr]=object[curr.toLowerCase()]
    return accum
  },{})
}
function multiple(objects,columns) {
  return objects.map((object)=>{
    return single(object,columns)
  })
}
module.exports={
  single,
  multiple
}