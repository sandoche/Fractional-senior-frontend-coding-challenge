# Fractional Senior Frontend Coding Challenge

> This readme file contains all the answers to the questions asked in the challenge. It follows the same structure as the challenge instruction document.

👉 [Challenge Instructions](docs/00_Challenge_Instructions/senior-frontend-coding-challenge.md) — https://gist.github.com/TRCSamurai/96b3d5d78cb4b8cc703d2e78421e3cb4

## Basic

### A

See the `insertionSort(array)` function in the [sortings.js](docs/01_Basic_A/sorting.js) file.
I commented the code to explain the different steps. By running `npm run basic:a` you can get the estimation of executing the `insertionSort(array)` function 10 billion of times.

Output example:

```
Time of sorting 1000000 arrays: 212 ms
Estimated time of sorting ten billion arrays: 2120000 ms
In minutes: 35.333333333333336 min
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

I built the web app Coinslim, a clutter-free list of the top 100 cryptocurrencies.

Coinslim lets you sort the cryptocurrency using a few criteria, save your favourites, search any cryptocurrency listed in CoinGecko, and see a financial summary of each coin. It can also be installed as PWA with an offline mode!

👉 https://coinslim.netlify.app

#### Tech stack

CoinSlim is built with Nuxt.js, here is the detailed stack:

- Nuxt.js (v2.15.7) — SSR mode — that comes with Vue.js (v2.6.12)
- Vuex — for the state management
- Axios — for the HTTP calls
- i18n plugin — to have all the strings well separated from the templates
- PWA plugin — for the offline mode
- Tailwind CSS & Tailwind UI — to make the style faster to implement
- PostCSS — to have some enhanced CSS features
- ES Lint, Style Lint, Prettier, Husky — to ensure a clean code style
- Cypress — for E2E Testing

I took a few technical choices:

- I use the `static` target to make it SEO Friendly
- I am using the options API instead of the composition API because the code is simple enough
- I decided to use Tailwind UI to avoid reinventing the wheel and therefore build the website faster
- I had the option between using a library that handles the state persistence or coding it myself with the local storage. Having a previous experience in the past with the library I preferred to do it myself to have more flexibility

#### Design & high-level decisions

When I have to build a website from scratch, I usually try to understand the need and to know who is the targeted user. Since this information was not provided and it was stated "If anything above feels unclear, please use your own judgement to make assumptions" I did my own assumptions.

To make something useful, I decided to make a "clutter-free" alternative to Coingecko or Coinmarketcap, both those websites are full of information everywhere and we can easily lose focus. That is why I focused on having a clean and readable interface. Also, I decided to display on the front page information related to the All-time high that we don't usually see and can be interesting for a user.

I had to make a few other decisions that I summarized below:

- Coin details page — Although it wasn't cleary asked, all the coins lists links to a coin detail page, so I decided to go for it
- Search — Use of the Coingecko API instead of a search filter, because the API is fast enough and makes the website "future-proof" in case it will be expanded to more than 100 cryptos
- Pagination — Because the requirements was saying "100 coins", I didn't go for pagination.
- Tests — Because it was optional, I only did one test, to try Cypress that I saw among your stack and that haven't used before

#### Mockups & Architecture

I did some low fidelity mockups after taking the decisions stated above, you can see them here: https://github.com/sandoche/Fractional-senior-frontend-coding-challenge/issues/1#issuecomment-1052381901

I then listed the routes/components, more details here: https://github.com/sandoche/Fractional-senior-frontend-coding-challenge/issues/2#issuecomment-1052389337

That's all! If you have any questions contact me.
