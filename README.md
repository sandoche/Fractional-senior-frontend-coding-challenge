# Fractional Senior Frontend Coding Challenge

> This readme file contains all the answers to the questions asked in the challenge. It follows the same structure as the challenge instruction document.

👉 [Challenge Instructions](docs/00_Challenge_Instructions/senior-frontend-coding-challenge.md) — https://gist.github.com/TRCSamurai/96b3d5d78cb4b8cc703d2e78421e3cb4

## Basic

### A

See the `insertionSort(array)` function in the [sortings.js](docs/01_Basic_A/sorting.js) file.
I commented the code to explain the different steps. By running `npm run basic:a` you can get the estimation of executing the `insertionSort(array)` function 10 billion of times.

Output example:

```
Time of sorting 10000000 arrays: 1638 ms
Estimated time of sorting One billion arrays: 1638000 ms
In seconds: 1638 s
```

### B

Find below my improved version of the code provided in the challenge.

```js
const ROLE_ADMIN = 'ADMIN'
const USER_ROLE_UPDATED = 'USER_ROLE_UPDATED'

const initState = async (email) => {
  try {
    const state = await loadInitialState()
    const user = await getUser(state, email)
    const userId = user.id

    await getUserSettings(state, userId)
    await setRole(state, userId, ROLE_ADMIN)
    await notifyUser(userId, USER_ROLE_UPDATED)
    await notifyAdmins(USER_ROLE_UPDATED)
  } catch (error) {
    console.log('An error occured')
  }
}

initState('email@email.com')
```

## Practical

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
