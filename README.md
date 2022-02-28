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

### How to run

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

### Project description

#### In short

I built the webapp Coinslim, a clutter-free list of the top 100 cryptocurrency.

Coinslim lets you sort the cryptocurrency using a few criterias, favourites them, search any cryptocurrency listed in CoinGecko, and see a financial summary of each coin.

👉 https://coinslim.netlify.app

#### Tech stack

CoinSlim is built with Nuxt.js, here is the detailled stack:

- Nuxt.js (v2.15.7) — SSR mode — that comes with Vue.js (v2.6.12)
- Vuex — for the state management
- Axios — for the HTTPs calls
- i18n plugin — in order to have all the strings well separated from the templates
- PWA plugin — for the offline mode
- Tailwind CSS & Tailwind UI — to make the style faster to implement
- PostCSS — to have some enhanced CSS features
- ES Lint, Style Lint, Prettier, Husky — to ensure a clean code style
- Cypress — for E2E Testing

Nuxt.js is my default choice when building a website because I love using Vue, and Nuxt lets you code with vue and generate the static website. CoinSlim is therefore built with the `static` target in order to not only have a SEO friendly website and also to take advantage of free static website hosting such as Netlify.

I chose to use the options API instead of the composition API, because I am more used to it, and the project is small enough to have a simple code without the need of it.

Also, I decided to use Tailwind UI, that I recently purchased the license of for a project, to avoid reinventing the wheel and therefore build the website faster. If you want to see some code I wrote without any CSS Frameworks I invite you to check my projects on my website — https://www.sandoche.com.

#### Design & high-level decisions
