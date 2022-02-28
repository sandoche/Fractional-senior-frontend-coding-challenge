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

Coinslim lets you sort the cryptocurrency using a few criterias, favourites them, search any cryptocurrency listed in CoinGecko, and see a financial summary of each coin. It can also be installed as PWA with offline mode!

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

When I have to build a website from scratch, I usually try to understand the need and to know who is the targeted user. Since these information were not provided and it was stated "If anything above feels unclear, please use your own judgement to make assumptions" I did my own assumptions.

In order to make something useful, I decided to make a "clutter-free" alternative to coingecko or coinmarketcap, both those websites are full of information everywhere and we can easily loose focus. That is why I focused on having a clean and readable interface. Also I decided to display in the front page information related to the All time high that we don't usually see and can be interesting for a user.

I had to make a few other decisions, that I will decribe below.

##### Search

It wasn't clear if I should have implemented a search filter on the top 100 or a search using the API.
The API of Coingecko being pretty fast, I decided to go for the use of it. Also it makes the website more future-proof, in case it will be expanded to more than 100 cryptos.

##### Coin details page

The requirements said "Create a list of the top 100 coins" I wasn't sure if it was only a "dull list" of coins only or a list similar to coingecko / coinmarket cap that lets you click to see details. Because a "dull list" doesn't give much info to the user, I decided to make a simple page, with a few informations and most important: a link to the original website, and a link to the details from coingecko. I was intially going for a solution in between: a page for each coin that would redirect to coingecko, but because the effort to make it as a full page was little I went for that.

##### Async HTTP Requests

I had to choose between have blocking HTTP requests that are done before the loading of the page, or after. I went for queries that comes after the page starts to load in order to gives the feeling of speed to the user. Nevertheless I did it in a way the static generation would pre-generate all the pages for better SEO. We could imagine that in the future a CRON based generation of the static pages can be done. Or to use SSR instead of static pages.

##### Pagination

Because it was saying "100 coins", I didn't go for pagination.

##### State persistance

I had the option between using a library that handle the state persistance or to code it myself with the local storage. Having a previous experience in the past with the library I prefered to do it myself to have more flexibility.

##### Mockups & Architecture

I did some low fidelity mockup after taking the decision above, you can see them here: https://github.com/sandoche/Fractional-senior-frontend-coding-challenge/issues/1#issuecomment-1052381901

I then listed the routes / components, more details here: https://github.com/sandoche/Fractional-senior-frontend-coding-challenge/issues/2#issuecomment-1052389337

##### Tests

Because it was optional, I only did one test, in order to try Cypress that I haven't used before. But I saw it in your job offer.

That's all! If you have any question contact me.
