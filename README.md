# ReportAlert 🧑🏼👩🏽‍💗

## 🔴 Live Link 🔴

Here is the live link to our demo of the dashboard:

[----Live link to dashboard!----](https://meesterproef.netlify.app/)
<br>

<img src="https://imgur.com/xqAxZ5I.png">

_by [Sharon Veldman](https://github.com/SharonV33), [Johan van Beusekom](https://github.com/johancvb) & [Veerle Prins](https://github.com/veerleprins)_

The full process can be found at: [Product Biography](https://www.figma.com/proto/qmR60oIyQVMrd7dndpxZCh/Work-FemAlert?page-id=0%3A1&node-id=1%3A919&viewport=375%2C2840%2C0.11073474586009979&scaling=min-zoom) or the [Design Rationale](https://www.figma.com/proto/qmR60oIyQVMrd7dndpxZCh/Work-FemAlert?page-id=1%3A4985&node-id=1%3A5313&viewport=405%2C470%2C0.134629487991333&scaling=min-zoom)

---

## 📝 Description

Many people in The Netherlands are the victim of (sexual) harassment. For example; 53% of all women have experienced harassment in some way, but also men are more often the victim of harassment. <br>
Nowadays, unwanted and inappropriate behavior towards victims keeps getting worse. Especially in clubs and festivals, people are more often the victim of harassment in any possible way. Sexual harassment and intimidation, aggression, racism and/or discrimination towards victims are the main problems in today's nightlife.

That's where ReportAlert comes in handy. ReportAlert is an initiative, established by Rosanne Verbeek, to protect people from unwanted situations while partying or going out to clubs.
ReportAlert is a platform where people can report any kind of unacceptable behavior in an accessible way, without immediately taking it to the police. ReportAlert also lets club, bar, or festival owners get in touch with victims to help them and offer support.

The platform ReportAlert is also made for owners to give them insights, to see exactly what's going on inside of their clubs or festivals. With these insights, the owners can anticipate on the situations to make the nightlife much safer and better in their venues.

Our job is to make a neat-designed and detailed dashboard for both club owners and festival owners to provide them with visualized data about the reports made in/for their clubs.

## 🔢 Data

ReportAlert is still a concept, which means it doesn't have a working application yet. Because it's still a work in progress, we couldn't be provided with real data. Therefore, we had to generate our own dummy data. To do this, we used the online tool mockaroo.com. With Mockaroo you can create mock data, to your own liking. Based on the steps you have to take and the forms you have to fill in while making a new report, we created the dummy data with corresponding data-types and values.

We created 2 datasets. One for all the reports, and one for the clubs. These datasets are joint by their ID's. Each report can be connected to a specific club or event. Here are two snippets of the datasets:

Reports data:

```
{
    "id": 12,
    "date": "07/02/2021",
    "time": "0:18",
    "accident": [
      "Gediscrimineerd",
      "Racisme",
      "Agressie",
      "Uitgescholden",
      "Aangerand",
      "Anders"
    ],
    "story": "donec dapibus duis at velit eu est congue elementum in hac",
    "first_name": "Lynnette",
    "email": "lopyb@amazon.de",
    "need_help": false,
    "make_contact": true,
    "club_id": 18
  }
```

Club data:

```
  {
    "club_id": 3,
    "lat": 52.362252,
    "long": 4.846075,
    "club_name": "Het Paleis"
  }
```

### 💾 Database

To save this data, a database is needed. That's why we are using Firebase during this project. Firebase is a platform developed by Google for creating mobile and web applications. It also supports a realtime database function.

## 📊 Features

To create the dashboard, we first had to make some designs. To do this, we used Figma. In Figma, it's possible to create and design multiple pages, to make different versions of our dashboard. Figma is basically a sandbox to mess around in and try out different kinds of designs/layouts.

Our job is to create a mobile and desktop version of a dashboard which will give insights into the reports which have been made at a club, bar of festival. Our main focus is to create a mobile version. This way it makes it possible for bouncers to get notified on new reports, so that they can anticipate on them and help the victims when needed.

In the next chapters, the features of the dashboard will be explained for both versions.

## 📱 Mobile version

The mobile version of the dashboard is divided in 3 pages:

- Home
- All reports
- Settings

### 🏠 Home

On this page, you can see a bar chart, a donut chart, and a counter of all the reports made on that day.<br>

The charts on this page give insights to the amount of reports and the different types of reports. On the top of this page you can see a horizontal slider with buttons. With these buttons, you can switch between days/weeks to see the data from that specific day/week.

### 📑 All Reports

On this page, you can see all the reports that are made by the victims.<br>

On each report you can see the date and time, the kinds of harassments reported, the story of the victim, if the victim needs help, and/or if the victim wants to be contacted by ReportAlert. If you click on the report, another page opens. On this page you can see the full version of the victim's story, the name of the victim, and the email address of the victim. Also, there's an option where you can offer help to the victim, if wanted.<br>

### 🔩 Settings

On this page, you can see all the information about the user. In this case it's the owner of a club in Amsterdam. <br>

The user can change its info with the use of the "Bewerk profiel" button. Also on this page, the user can change the language and turn on Dark theme mode. The Dark theme mode is a concept we're going to work on if we have time left. Our main focus is to make the important functions work on the other pages.

### 🧭 Navigation

The user can navigate through this app by using a navigation. We've implemented a 'hamburger' navigation, as you can see by the icon in the top right corner of each page. On this navigation screen, there's also an option to log out from the app.<br>

---

## 💻 Desktop version

The desktop version of the dashboard is divided in 4 pages:

- Home
- Map
- All Reports
- Settings

### 🏠 Home

On this page, multiple unique graphs and charts are being shown with data about the reports made on a particular date/period.<br>

The main focus of this page is the bar chart which shows the amount of reports which have been made. On this chart, you can filter the weeks, and the different types of harassments reported in that week. For example, if you want to see what reports were made last week, you can just click on the button of that particular week, and it shows the amounts of reports made in that week, on each day. To see what types of harassments these reports were, you have to click on them, and it filters out the rest of the reports.

Also being shown on this page is a donut chart with the different harassment types, on a particular date or period. Next to this chart are two sections with counters of the total amount of reports made on that day, and the amount of people who need help.

These visualizations provide the most important data for club owners, and give them the information needed with just a glance.

### 📌 Map

On this page, a heatmap is shown. In our case we are using a heatmap of Amsterdam, because it's one of the most famous and busiest nightlife-cities of The Netherlands.
<br>

We are using a heatmap to give an indication to the club owners to see where the most reports are made. The different club owners can then compare their clubs to others.<br>
Because of privacy reasons, we decided to use a heatmap instead of a regular map that pinpoints the specific locations of the reports. With this heatmap, the club owners can see the areas instead of the exact locations of the reports. The darker the color on the map, the more reports have been made in that specific area.

### 📑 All Reports

On this page, all the reports are being shown in detail. Here you can see the story of the victim, the type of harassment they reported, the date and time, if the victim needs help, and if the victim wants to be contacted by ReportAlert. If you click on one of the reports, you will see the victims name and email address, given that they gave permission for the club owner to reach out.<br>

We have implemented a search bar to find specific reports. With the search bar, you can find reports for specific days and times, as well as a specific type of harassment.

### 🔩 Settings

On this page, the settings of the club owner or festival owner are shown. The owners can edit their information here, log out, or turn on the Dark theme mode.

The Dark theme mode is an extra feature we are implementing if we have enough time to do so. Our main focus will be on the other pages, where the functionalities of the dashboard are the most important.

## 👨🏼‍💻 Coding

In this project, we are using Svelte and D3.js to create the dashboards.<br>
Svelte is a JavaScript framework made to reduce boilerplate code. This makes your code more understandable and much easier to read.<br>
D3.js is a JavaScript library to visualize data and make various types of graphs, charts, and other visualizations.

Our working method in this project is based on an article written by Brad Frost. In this article, Brad Frost writes about Atomic Web Design. Atomic Web Design is a work method where you basically filter your application in multiple layers. <a href="https://bradfrost.com/blog/post/atomic-web-design/">Click here for the article.</a>

With Atomic Web Design, you are using Atoms, Molecules, Organisms, and Templates. Each group is a part of the next group. For example; multiple atoms form a molecule, multiple molecules form an organism, and so on.

In our project, all the small parts like buttons, charts, graphs etc., are atoms. These atoms are put into molecules, like a navigation bar, a list of different reports, and so on. These molecules are then being placed into organisms; mostly bigger sections. All the organisms can be placed in a template, which create the pages for your application.<br>
This way of working makes coding easier and more understandable.
<br>

Here is a screenshot of the map-structure in our project:<br><br>
<img src="https://imgur.com/iJNANzA.png" width="200" height="500">

## 🔨 Install

Here's a manual for installing this project.<br>

### 📡 Install Node.js & npm

To start off, install Node.js & npm. Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Npm is a Node Package Manager, to install and manage packages.

To install Node.js and npm, go to <a href="https://nodejs.org/en/">https://nodejs.org/en/</a>, and download the latest version of Node.js on your device. Make sure to select the npm-install option while installing Node.js.

### 📍 Clone the GitHub repository

To get the project on your code-editor, you have to clone it from our GitHub repository. (<a href="https://github.com/veerleprins/ReportAlert-meesterproef">https://github.com/veerleprins/ReportAlert-meesterproef</a>)
<br>
To do this, type the following command in your terminal:

```
git clone https://github.com/veerleprins/ReportAlert-meesterproef.git
```

### 📦 Install all the used packages

To install all the used packages in this project, type the following command in your terminal:

```
npm install
```

### 🟢 Start and run the server

To run the server, type the following command in your terminal:

```
npm run dev
```

## 📋 Sources

Deyana, H. (2019, 19 oktober). is not a valid SSR component in Sapper. ww.github.com. https://github.com/rob-balfre/svelte-select/issues/87

Add Firebase to your JavaScript project. (z.d.). Firebase. https://firebase.google.com/docs/web/setup?authuser=0#add-sdks-initialize

Frost, B. (2020, 31 augustus). Atomic Design. Brad Frost. https://bradfrost.com/blog/post/atomic-web-design/

Rau, C. (2021, 23 februari). Bug: Rollup plugin-replace: preventAssignment set to “false” · Issue #302 · sveltejs/sapper-template. GitHub. https://github.com/sveltejs/sapper-template/issues/302

Kivistö, S. (2018, 16 februari). Circular dependencies inside d3 selection. www.github.com. https://github.com/d3/d3-selection/issues/168

ColorSpace - Color Palettes Generator and Color Gradient Tool. (z.d.). ColorSpace. https://mycolor.space/?hex=%23EEC0A6&sub=1

Watch and Learn. (2019, 20 november). Creating #Svelte, #Sapper and #WordPress Website - Part 02 - Post Details And Environment Variables. YouTube. https://www.youtube.com/watch?v=_aQTfCYo6_8

D. (2021, 17 februari). Fetching Data in Svelte. DEV Community. https://dev.to/daveturissini/fetching-data-in-svelte-1jpn

Get data with Cloud Firestore |. (z.d.). Firebase. https://firebase.google.com/docs/firestore/query-data/get-data#node.js

How To Create a Toggle Switch. (z.d.). W3Schools. https://www.w3schools.com/howto/howto_css_switch.asp

How to count a number of words in given string in JavaScript? (z.d.). Tutorialspoint. https://www.tutorialspoint.com/how-to-count-a-number-of-words-in-given-string-in-javascript

How to get unique values in an array. (2012, 28 juni). Stack Overflow. https://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array

Leaflet — an open-source JavaScript library for interactive maps. (z.d.). Leaflet. https://leafletjs.com/

Maximum amount of characters in a div/paragraph tag. (2013, 17 oktober). Stack Overflow. https://stackoverflow.com/questions/19425555/maximum-amount-of-characters-in-a-div-paragraph-tag/19425776

Remove empty elements from an array in Javascript. (2008, 11 november). Stack Overflow. https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript

Harris, R. (2019, 4 mei). Rich-Harris/svelte-d3-arc-demo. GitHub. https://github.com/Rich-Harris/svelte-d3-arc-demo

McCann, B. (2020, 12 juni). RollupCompiler does not output warnings in dev mode. github.com. https://github.com/sveltejs/sapper/issues/1266

Shorten string without cutting words in JavaScript. (2011, 28 maart). Stack Overflow. https://stackoverflow.com/questions/5454235/shorten-string-without-cutting-words-in-javascript

Style SVG circle with CSS. (2013, 10 januari). Stack Overflow. https://stackoverflow.com/questions/14255631/style-svg-circle-with-css

Svelte REPL. (z.d.-b). Svelte. https://svelte.dev/repl/e9c4ff0b0ff94059a6c85a09c556284a?version=3.29.0

Svelte REPL. (z.d.-a). Svelte. https://svelte.dev/repl/03f0be0c4dc54eb4af5a168f644f5c31?version=3.19.1

Svelte: add noscroll classname to body from component. (2020, 5 augustus). Stack Overflow. https://stackoverflow.com/questions/63259289/svelte-add-noscroll-classname-to-body-from-component

Laarman, G. (2020, 23 november). gijslaarman/d3-svelte. GitHub. https://github.com/gijslaarman/d3-svelte/blob/master/src/components/Graph.svelte

## © License

This repo is licensed as MIT by <a href="https://github.com/veerleprins">Veerle Prins</a>, <a href="https://github.com/SharonV33">Sharon Veldman</a> and <a href="https://github.com/johancvb">Johan van Beusekom</a>, 2021.
