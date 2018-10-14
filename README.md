# Learn you node

Simple little repo to make learnyounode even easier

[Node School](https://nodeschool.io/#workshoppers)

## Installation

1.  Clone `git clone https://github.com/begin-agin/learnyounode.git`
1.  Install dependencies, `yarn install`
1.  Make it your own
    1.  Create an empty repo of your own on GH.
    1.  Remove existing remote `git remote remove origin`
    1.  Add remote for your GH, `git remote add origin https://gihubcom/<userid>/<repo-name>.git`
    1.  Set up tracking on master, `git branch master --set-upstream-to origin/master`

## Usage

### Shortcuts

Because learnyounode is installed locally, one has to either use yarn or reference the binary in node_modules. It's easier to use yarn, imo.

*   `yarn current`, show current challenge
*   `yarn lhelp`, show help
*   `yarn lrun <js file>`, run you solution with some test inputs
*   `yarn next`, move to next challenge
*   `yarn print`, show current challenge
*   `yarn reset`, clear current progress
*   `yarn start`, start a new session
*   `yarn verify <js file>`, check your solution

### Practice

*   Create a new branch for each attempt.
*   Practice without looking at internet or previous attempts 
