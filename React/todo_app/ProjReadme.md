## Pre-Requisities

Create the project

Add the CSS and JS files

Create the ToDo Form (Has all the state of todoList) and Todo List. 

## Setting up the actions

Create action constant and action creators

## Reducers

Create the reducers in the 

## Create Store

import redux

create store in redux

## Providing store access

we need to import {Provider} from react-redux

wrap only those compoenet where you want to use the store

import store in the page too

## Using Selector to change the value

how to read data from the store

first define some initial values. do that in intialState

right now TodoList is reponsible for displaying the list and it is getting the props from its parents which is App.js State.

Now we need to get the todos data from store, not from parent. SO, remove from props

useSelector hook to get the data from the store.

now data will be displayed in the list but toggle button is not working

## Dispatching Actions and Payloads

`useDispatch` hook to dispatch the actions to the store so that the actions can be executed like toggle button and create a new todo.

we will be using dispatch in button 'create todo' > TodoForm.js
since we send the data directly to store by calling the action creator