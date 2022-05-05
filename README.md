# Restopedia

## Background

This is a project that needs to be done for me to graduate from Frontend Developer Expert Course by [Dicoding](https://www.dicoding.com/academies/219). The application created may be simple in terms of features. But this class put more concern to ensure robust performance by considering Metric Web Vitals which -- to my surprise -- affects many area in development phase.

In addition, there is a [statistic](https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/) that signifies of increasing mobile web percentage over these past few years.

![Statistic Mobile Web Traffic](https://github.com/ilhamAdhim/restopedia/blob/master/src/public/images/screenshots/statistic-mobile-web-traffic.png?raw=true)

> Knowing these facts, the question is : </br> > <b> How do we make a website accessed across mulitple device while delivering its best performance ? </b>

## Project Overview

<br />
To answer such questions, we were given a case study to create a restaurant app.
To deliver such high performance, there are multiple ways that are implemented in this project :

- Clean Code Javascript
  <br />
  In software development, the quality of the product includes how maintainable the program is. Some approaches are being implemented in here are:
  - SOLID: Single Responsibility Principle, Open/Closed Principle
  - ESLint for common code conventions
  - Error Handling
- Progressive Web Apps
  <br />
  This is the part where we can make our website to be used more natively while user access it through mobile phones or tablets (e.g. using push notification). Moreover, this enables offline-mode capability through configured cache management with **Service Worker**.
- Automation Testing
  <br />
  By implementing TDD (Test Driven Development) and making it automated, bugs can be detected earlier and easier. In this project i used **Jasmine** for component and API Testing. While Puppeteer is used for E2E Testing
- Web Performance
  <br />
  Either in development or production phase, we can keep track of website performance through **Lighthouse**. Below are factors that has been implemented and gives improved loading speed to our website :
  - Image Compression with webpack plugin
  - Lazy Load Image
  - Code Splitting with Bundle Analyzer

<br />

<center>

![App Logo](https://github.com/ilhamAdhim/restopedia/blob/master/src/public/images/logo-restopedia.png?raw=true)

</center>

<br />
<center> Landing Page </center>

![Landing Page](https://github.com/ilhamAdhim/restopedia/blob/master/src/public/images/screenshots/landing-page.png?raw=true)

<br />
<center> List Restaurants </center>

![List Restaurants](https://github.com/ilhamAdhim/restopedia/blob/master/src/public/images/screenshots/resto-list.png?raw=true)

<br />
<center> Detail Restaurant </center>

![Detail Restaurant](https://github.com/ilhamAdhim/restopedia/blob/master/src/public/images/screenshots/detail-page.png?raw=true)

<br />
<center> Favorite Page | Empty </center>

![Favorite Page | Empty](https://github.com/ilhamAdhim/restopedia/blob/master/src/public/images/screenshots/empty-fav-page.png?raw=true)

<br />
<center>  Favorite Page | Restaurant Exist </center>

![Favorite Page | Restaurant Exist](https://github.com/ilhamAdhim/restopedia/blob/master/src/public/images/screenshots/fav-page-exist.png?raw=true)

</center>

## Tech Stack

![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=for-the-badge&logo=Jasmine&logoColor=white)
![Puppeteer](https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## List API Used

- 🍽️ [API Restaurants](https://restaurant-api.dicoding.dev)

## Project Reference

- ⚙ [Dicoding Frontend Expert course ](https://www.dicoding.com/academies/219)

## Deployed by

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
