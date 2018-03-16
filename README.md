![ClearScore](https://raw.githubusercontent.com/ClearScore/FED-home-test/master/docs/clearscore.png?token=ABpdw5m-hB7aVWCKaYGpucwwUt438SHLks5atOQHwA%3D%3D)

# Frontend Test

## About us

At ClearScore we are not limited to the technology stack we can use. Our systems evolve quickly and choosing the right tools for the job is an important factor within our development cycle.

We are currently working with...
 * ES6 and ES7 throughout the codebase
 * React with Redux (Some legacy apps used Angular, but this is being phased out)
 * Isomorphic / Universal SPA
 * SASS and following BEM, css-modules for styling
 * MEN (Mongo, Express, Node) stack websites
 * We build using the Webpack module bundler and Lerna package manager
 * Jest for Unit testing
 * We currently support the latest 2 versions of Edge, Chrome, Firefox and Safari (plus ie11)

## Background

A developer is halfway through a `score indicator feature` card and has been called away.

It is now up to you to finish the feature ready to release.

## The Task

Build our circular score indicator, as shown on [clearscore.com/account/](https://www.clearscore.com/account/) and [https://youtu.be/tIjtcL5Z0Wk?t=5](https://youtu.be/tIjtcL5Z0Wk?t=5).
 * [Desktop example](/docs/score-indicator-desktop.jpg) 
 * [Mobile Example](/docs/score-indicator-mobile.jpg)

Send your solution as a link to a public git repository with clear instructions and your thoughts in the README.

## The AC's

 1. Build a carousel containing 2 slides.
 2. Build the first score indicator slide, and animate in a second panel for long term debt.
 3. Show the given score in the middle and with an arc outside that represents the score out of 700
 4. The arc animates on load with a bouncing effect at the end
 5. The data can be requested from [https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json](https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json)

## What we're looking for
 * A stylish solution with unit test coverage
 * Clean, concise code
 * Knowledge of ES6 syntax
 * A detailed README
 * A live site we can see if possible 

## Getting Started

 * Run: `yarn start:webpack`
 * Run: `yarn start:dev` _(in a new terminal)_
 * Goto: `http://localhost:3000/`
