# TodoReact

It is a TODO list implemented using React and using the useState hook. [Try the app](https://todoreactgromarant.netlify.app/)

[See repository](https://github.com/Gromarant/TodoReact/tree/master)

<br>

The application meets the following 
requirements:
<br>
<br>

1. A form with an input field (input) and an add button (ADD).

2. A list of elements (items) and shows them.

3. One button to clear all tasks from the list.

4. Each task has an associated DELETE button to delete it independently.

5. A RESET button, which displays the preloaded tasks from the original JSON.

6. Application of styles with css.

<br>

![TodoReact capturas](/src/assets/todoList.png "App to do list with React.js")

<br>

## Application flow:

When starting the application, an input field and an ADD button are displayed.
The ADD button is disabled until text is entered in the input field.

When text is entered and the ADD button is clicked, an item is added to the list below the input field.
Once an item is added, the input field is automatically cleared.

A task preload has been performed using data from a JSON file.
Clicking the RESET button shows again only the preloaded tasks from the JSON.

Data preloading is done using the React lifecycle.
If 20 seconds elapse without submitting the written assignment, the input field is emptied and the ADD button disappears.

After adding a task, the message "task added" is displayed for 5 seconds and then disappears.
A validation of the task entered in the input field is performed. It must be at least 6 characters, otherwise an error message is displayed.

<br>

## Application operation:

The application allows the user to add, delete and restart tasks in a list of TODOs. Entering text in the input field and clicking the ADD button adds a new task to the list. Each task has an associated DELETE button that allows it to be deleted independently. The CLEAR button clears all tasks from the list. The RESET button shows the preloaded tasks from the original JSON.

<br>

## License

This project is distributed under the **MIT License**. You can refer to the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for more details.

<br>

### Next steps and deployment on Netlify:

For the next steps, the following improvements could be considered:

- Implement unit and integration tests to ensure code quality. 
- Implement data persistence using a database or local storage.
- Add editing and marking capabilities for completed tasks.
- Improve the user interface with more attractive styles and layouts.

---
[<img align="left"  height="64" src="./src/assets/logo2023.png">](https://www.gromarant.com/)

<br>

[© 2023 Mariangelica Rodriguez.](https://www.linkedin.com/in/mariangelica-rodr%C3%ADguez-p%C3%A9rez/) All rights reserved.

<br>
<br>

***