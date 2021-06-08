# FemAlert 🧑🏼👩🏽‍💗

## 🔴 Live Link 🔴

Here is the live link to our demo of the dashboard:

[----Live link to dashboard!----](meesterproef.netlify.app/)
<br>

_by [Sharon Veldman](https://github.com/SharonV33), [Johan van Beusekom](https://github.com/johancvb) & [Veerle Prins](https://github.com/veerleprins)_

---

## 📝 Description

Many people in The Netherlands are the vitcim of (sexual) harassment. For example; 53% of all women have experienced harassment in some way, but also men are more often the victim of harassment. <br>
Nowadays, unwanted and inappropriate behaviour towards victims keeps getting worse. Especially in clubs and festivals, people are more often the victim of harassment in any possible way. Sexual harassment and intimidation, aggression, racism and/or discrimination towards victims are the main problems in todays nightlife.

That's where FemAlert comes in handy. FemAlert is an initiative, established by Rosanne Verbeek, to protect people from unwanted situations while partying or going out to clubs.
FemAlert is a platform where people can report any kind of unacceptable behavior in an accessible way, without immediately taking it to the police. FemAlert also lets club or bar owners get in touch with victims to help them and offer support.

The platform FemAlert is also made for club owners to give them insights, to see exactly what's going on inside of their clubs. With these insights, club owners can anticipate on the situations to make the nightlife much safer and better in their venues.

Our job is to make a neat-designed and detailled dashboard for club owners to provide them with visualized data about the reports made in/for their clubs.

## 🔢 Data

FemAlert is still a concept, which means it doesn't have a working application yet. Because it's still a work in progress, we couldn't be provided with real data. Therefore we had to generate our own dummy data. To do this, we used the online tool mockaroo.com. With Mockaroo you can create mock data, to your own likings. Based on the steps you have to take and the forms you have to fill in while making a new report, we created the dummy data with corresponding data-types and values.

We created 2 datasets. One for all the reports, and one for the clubs. These datasets are joint by their id's. Each report can be connected to a specific club or event. Here are two snippets of the datasets:

Reports data:<br><br>
<img src="https://imgur.com/ylmIW3U.png" width="500" height="250">

Club data:<br><br>
<img src="https://imgur.com/Fx8Etv2.png" width="300" height="150">

## 📊 Features

To create the dashboard, we first had to make some designs. To do this, we used Figma. In Figma, it's possible to create and design multiple pages, to make different versions of our dashboard. Figma is basically a sandbox to mess around in and try out different kinds of designs/layouts.

Our job is to create a mobile and desktop version of a dashboard which will give insights into the reports which have been made at a club, bar of festival. Our main focus is to create a mobile version. This way it makes it possible for bouncers to get notified on new reports, so that they can anticipate on them and help the victims when needed.

In the next chapters, the features of the dashboard will be explained for both versions.

## 📱 Mobile version

The mobile version of the dashboard is devided in 3 pages:

- Home
- All reports
- Settings

### 🏠 Home

On this page, you can see a bar chart, a donut chart, and a counter of all the reports made on that day.<br>
Here's a screenshot of our design for the 'Home' page:<br><br>
<img src="https://imgur.com/ZPZxW3l.png" width="200" height="500">

As you can see, the charts on this page give insights to the amount of reports and the different types of reports. On the top of this page you can see a horizontal slider with buttons. With these buttons you can switch between days/weeks to see the data from that specific day/week.

### 📑 All Reports

On this page, you can see all the reports that are made by the victims.<br>
Here's a screenshot of our design for the 'All Reports' page:<br><br>
<img src="https://imgur.com/bSqfxGW.png" width="200" height="500">
<img src="https://imgur.com/LkmOEz1.png" width="200" height="500">

On each report you can see the date and time, the kinds of harassments reported, the story of the victim, if the victim needs help, and/or if the victim wants to be contacted by FemAlert. If you click on the report, another page opens. On this page you can see the full version of the victim's story, the name of the victim, and the email adress of the victim. Also, there's an option where you can offer help to the victim, if wanted.<br> A screenshot of that page is next to the screenshot of the 'All Reports'-page screenshot.

### 🔩 Settings

On this page, you can see all the information about the user. In this case it's the owner of a club in Amsterdam. <br>
Here's a screenshot of our design for the 'All Reports' page:<br><br>
<img src="https://imgur.com/TEAZdIE.png" width="200" height="500">

The user can change it's info with the use of the "Bewerk profiel" button. Also on this page, the user can change the language and turn on Dark theme mode. The Dark theme mode is a concept we're going to work on if we have time left. Our main focus is to make the important functions work on the other pages.

### 🧭 Navigation

The user can navigate through this app by using a navigation. We've implemented a 'hamburger' navigation, as you can see by the icon in the top right corner of each page. On this navigation screen, there's also an option to log out from the app.<br>
Here's a screenshot of our design for the navigation page:<br><br>
<img src="https://imgur.com/gxS2dpM.png" width="200" height="400">

---

## 💻 Desktop version

The desktop version of the dashboard is devided in 4 pages:

- Home
- Map
- All Reports
- Settings

### 🏠 Home

On this page, multiple unique graphs and charts are being shown with data about the reports made on a particulary date/period.<br>
Here's a screenshot of our design for the 'Home' page:<br><br>
<img src="https://imgur.com/sErh1lt.png" width="500" height="300">

The main focus of this page is the line chart which shows the amount of reports which have been made. On this chart, you can filter the weeks, and the different types of harassments reported in that week. For example, if you want to see what reports were made last week, you can just click on the button of that particular week, and it shows the amounts of reports made in that week, on each day. To see what types of harassments these reports were, you have to click on them, and it filters out the rest of the reports.

Also being shown on this page is a donut chart with the different harassment types, on a particular date or period. Next to this chart is a section with a counter of the total amount of reports made on that day.

These visualizations provide the most important data for club owners, and give them the information needed with just a glance.

### 📌 Map

On this page, a heatmap is shown. In our case we are using a heatmap of Amsterdam, because it's one of most famous and busiest nightlife-cities of The Netherlands.
<br>
Here's a screenshot of our design for the 'Map' page: <br><br>
<img src="https://imgur.com/a3q1mE1.png" width="500" height="300">

We are using a heatmap to give an indication to the club owners to see where te most reports are made. The different club owners can then compare their clubs to others.<br>
Because of privacy reasons, we decided to use a heatmap instead of a regular map that pinpoints the specific locations of the reports. With this heatmap, the club owners can see the areas in stead of the exact locations of the reports. The darker the color on the map, the more reports have been made in that specific area.

### 📑 All Reports

On this page, all the reports are being shown in detail. Here you can see the story of the victim, the type of harassment they reported, the date and time, if the victim needs help, and if the victim wants to be contacted by FemAlert. If you click on one of the reports, you will see the victims name and email address, given that they gave permission for the club owner to reach out.<br>
Here's a screenshot of our design for the 'All Reports' page: <br><br>
<img src="https://imgur.com/hahEljQ.png" width="500" height="300">

As you can see on the screenshot of our design, we have implemented a searchbar to find specific reports. With the search bar, you can find reports for specific days and times as well as a specific type of harassment.

Next to the section with all the reports, you can see two pie charts. These charts visualize the amount of victims who asked for help or want to be in contact with FemAlert.

### 🔩 Settings

On this page, the settings of the club owner are shown. The club owners can edit their information here, or turn on the Dark theme mode. Here's a screenshot of our design for the 'Settings' page:<br><br>
<img src="https://imgur.com/RzhchBy.png" width="500" height="300">

As you can see, the information of the club and it's owner is being shown on this page. The club owner can also edit it's information, log out, or turn on the Dark theme mode.

The Dark theme mode is an extra feature we are implementing if we have enough time to do so. Our main focus will be at the other pages, where the functionalities of the dashboard are the most important.

## 👨🏼‍💻 Coding

In this project, we are using Svelte and D3.js to create the dashboards.<br>
Svelte is a JavaScript framework made to reduce boilerplate code. This makes your code more understandable and much easier to read.<br>
D3.js is a JavaScript libary to visualize data and make various types of graphs, charts, and other visualizations.
<br>

Our working method in this project is based on an article written by Brad Frost. In this article, Brad Frost writes about Atomic Web Design. Atomic Web Design is a work method where you basically filter your application in multiple layers. <br><br>
With Atomic Web Design, you are using Atoms, Molucules, Organisms, and Templates. Each group is a part of the next group. For example; multiple atoms form a molecule, multiple molecules form an organism, and so on. On the following picture you can see a visual representation of Atomic Web Design: <br>

<img src="https://imgur.com/zJcPlv4.png" width="500" height="300">
<a href="https://bradfrost.com/blog/post/atomic-web-design/">Click here for the article.</a>
<br>

In our project, all the small parts like buttons, charts, graphs etc., are atoms. These atoms are put into molecules, like a navigation bar, a list of different reports, and so on. These molecules are then being placed into organisms; mostly bigger sections. All the organisms can be placed in a template, which create the pages for your application.<br>
This way of working makes coding easier and more understandable.
<br><br>
Here is a screenshot of the map-structure in our project:<br><br>
<img src="https://imgur.com/iwz8HB2.png" width="200" height="500">

## 🔨 Install

Here's a manual for installing this project.

### 📡 Install Node.js & npm

To start off, install Node.js & npm. Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Npm is a Node Package Manager, to install and manage packages.

To install Node.js and npm, go to <a href="https://nodejs.org/en/">https://nodejs.org/en/</a>, and download the latest version of Node.js on your device. Make sure to select the npm-install option while installing Node.js.

### 📍 Clone the GitHub repository

To get the project on your code-editor, you have to clone it from our GitHub repository. (<a href="https://github.com/veerleprins/FemAlert-meesterproef">https://github.com/veerleprins/FemAlert-meesterproef</a>)
<br><br>
To do this, type the following command in your terminal:
<br>
`git clone https://github.com/veerleprins/FemAlert-meesterproef.git`

### 📦 Install all the used packages

To install all the used packages in this project, type the following command in your terminal:
<br>
`npm i`
<br>
This may take some time to install.

### Start and run the server

To run the sever, type the following command in your terminal:
<br>
`npm run dev`

## 📋 Sources

https://bradfrost.com/blog/post/atomic-web-design/

## © License

This repo is licensed as MIT by Veerle Prins, Sharon Veldman and Johan van Beusekom, 2021.
<br><br><br>

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
