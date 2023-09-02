# Problem Description:

You are tasked with creating a simple React component that displays a list of items and allows users to add new items to the list. Each item in the list should have a unique ID and a corresponding name.

Your task is to implement the ItemList component with the following requirements:

Display a list of items, where each item is represented as a <div> element with the format: <div key={id}>{name}</div>. The key attribute should be set to the item's unique ID.

Render an input field and a button below the list.

When the user types a name into the input field and clicks the button, a new item should be added to the list with a unique ID and the name entered by the user. The input field should be cleared after adding the item.

# Hints:

You'll need to use React state to keep track of the list of items and the value of the input field.

You can use the map function to render the list of items as <div> elements.

Use the useState hook to manage the state of the items and input field value.

# Solution Approach:

Create a functional component called ItemList.

Initialize a state variable to store the list of items and another state variable to store the value of the input field.

Render the list of items using the map function, and for each item, render a <div> element with a unique key and the item's name.

Render an input field and a button below the list.

Implement an event handler function for the button click that adds a new item to the list with a unique ID and the name entered in the input field. Clear the input field after adding the item.

# only for problem setter ->

complete solution is added inside inside ItemList.js Component and it has been rendered in app.js and test cases are written inside testCases.js

