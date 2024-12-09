# React Native Null or Undefined Property Access Error

This repository demonstrates a common yet tricky error in React Native applications: attempting to access a property of an object that is currently `null` or `undefined`. The problem is exacerbated by React Native's sometimes vague error messages.

## The Problem

The core issue is accessing object properties before ensuring the object itself exists and has been populated with data.  The `bug.js` file shows a simple example where fetching user data asynchronously can lead to an error if the component attempts to render before the data is available.

## The Solution

The `bugSolution.js` file provides a solution using optional chaining (`?.`) and nullish coalescing (`??`).  These operators elegantly handle the potential absence of the `user` object or its `name` property.  The optional chaining safely avoids the error, and the nullish coalescing provides a default value if the property is missing.  This prevents the app from crashing and provides a more graceful user experience.