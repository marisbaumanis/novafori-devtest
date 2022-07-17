## How long did you spend on your solution?

About 6 hours, with a significant portion of the time spent on setup.

## How do you build and run your solution?

For the initial setup, run 'yarn install' and 'yarn common build'.
Then, use 'yarn dev' to run both the Node backend, and the React frontend.

Use 'yarn test' to run the unit tests.

## What technical and functional assumptions did you make when implementing your solution? 

I assumed that this would be used a quick todo list (not persistent), used by a single user.

## Briefly explain your technical design and why do you think is the best approach to this problem.

The design consists of a very simple Node REST API on the backend, containing the endpoints to list, create and update tasks, 
as well as a frontend UI written using React and TS.

This is a very small project, so I opted for a quick NodeJS solution instead of a .NET one.

I kept the structure very simple, with three separate packages - server, client and common - allowing me to reuse the ToDoItem 
type definition in both the frontend and the backend.
