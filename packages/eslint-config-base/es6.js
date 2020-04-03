/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // require parens in arrow function arguments
    'arrow-parens': 0,
    // require space before/after arrow function's arrow
    'arrow-spacing': 0,
    // verify super() callings in constructors
    'constructor-super': 0,
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 0,
    // disallow modifying variables of class declarations
    'no-class-assign': 0,
    // disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 0,
    // disallow empty constructors and constructors that only delegate into the parent class.
    'no-useless-constructor': 2,
    // require let or const instead of var
    'no-var': 2,
    // require method and property shorthand syntax for object literals
    'object-shorthand': 0,
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 2,
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 0,
    // suggest using Reflect methods where applicable
    'prefer-reflect': 0,
    // suggest using template strings instead of concatenation or joining
    'prefer-template': 2,
    // disallow generator functions that do not have yield
    'require-yield': 0,
    // disallow trailing commas in object literals
    'comma-dangle': [2, 'always-multiline'],
  },
};
