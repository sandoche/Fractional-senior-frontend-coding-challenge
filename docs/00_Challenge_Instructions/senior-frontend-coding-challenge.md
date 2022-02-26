_NOTE: Please use Javascript with exercises where it makes sense._

## Basic

Solve exercises A, B and explain your reasoning. It's ok to use pseudo-code where needed as well as any popular language you're comfortable with (except when noted otherwise).

A) Please write a function that sorts 11 small numbers (<100) as fast as possible. Once written, provide an estimate for how long it would take to execute that function 10 Billion (10^10) times on a normal machine.

B) Please make improvements to the code below, using Javascript.

```
loadInitialState()
.then((state)  => {
    return getUser(state, 'email@email.com')
    .then(user => {
        return getUserSettings(state, user.id)
        .then(settings => {
            return setRole(state, user.id, "ADMIN")
            .then(success => {
                return notifyUser(user.id, "USER_ROLE_UPDATED")
                .then(success => {
                    return notifyAdmins("USER_ROLE_UPDATED")
                })
            })
        })
    })
})
```

## Practical

_Please use Javascript / Vue JS / Nuxt for the following task._

1. Create an application with following requirements:
    - Create a list of the top 100 coins (use [Coingecko's](https://www.coingecko.com/en/api) API)
    - Implement search, favorite, and sorting functionalities
    - Implement state management
    - if user refreshes the page, application's state needs to be preserved
    - (bonus) needs to work offline

2. (Bonus) Write all needed tests
   
3. Write a high-level description (1 page) explaining your solution. Explanation should include: 
    - A description of what you've built
    - Which technologies you've used and how they tie together
    - Your reasons for high-level decisions 
 
If anything above feels unclear, please use your own judgement to make assumptions. If you have a question about which coding language or framework you should be using on a particular task, please send an email to nate@fractional.art to confirm.

Time limit: 7 days.

Send us your answers, as-well as the link to the Github repository back via email.

Please also make sure that the repository is private and that you give the following users access 
- TRCSamurai 
- jjfractional
- Cvetlicnifractional

