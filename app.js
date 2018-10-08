
let divContainer = document.getElementById("container")
divContainer.className = "maincontainer"
//----------------------------------------

let divMenu = document.createElement("div")
divMenu.className = "divmenu container"

let divHigh = document.createElement("div")
divHigh.innerHTML = "HighOnCoding"
divHigh.className = "high"
divMenu.appendChild(divHigh)

let divHome = document.createElement("div")
divHome.innerHTML = "Home"
divHome.className = "homeCat"
divMenu.appendChild(divHome)

let divCategories = document.createElement("div")
divCategories.innerHTML = "Categories"
divCategories.className = "homeCat"
divMenu.appendChild(divCategories)


divContainer.appendChild(divMenu)

//-------------------------------------------------
let divCurrent = document.createElement("div")
divCurrent.className = "cursemenu"


let h1 = document.createElement('h1')
h1.innerHTML = "Curse of the Current Reviews"
h1.className = "curse"
divCurrent.appendChild(h1)

let pCurrent = document.createElement('p')
pCurrent.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
pCurrent.className = "curseparagraph"
divCurrent.appendChild(pCurrent)

divContainer.appendChild(divCurrent)
//------------------------------------------------------
let divHello = document.createElement("div")
divHello.className = "helloWatchAndIntroMenu"

let h2Hello = document.createElement('h2')
h2Hello.innerHTML = "Hello WatchKit"
h2Hello.className = "helloWatchAndIntro"
divHello.appendChild(h2Hello)

let pHello = document.createElement('p')
pHello.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
pHello.className = "pHelloAndIntro"
divHello.appendChild(pHello)

divContainer.appendChild(divHello)

//------------------------------------------------------
let orangeBarHello = document.createElement('div')
orangeBarHello.className = "container orangeBar"

let commentHello = document.createElement('div')
commentHello.innerHTML = "12 comments"
orangeBarHello.appendChild(commentHello)

let likeHello = document.createElement('div')
likeHello.innerHTML = " 124 likes"
orangeBarHello.appendChild(likeHello)

divHello.appendChild(orangeBarHello)

//------------------------------------------------------
let divIntro = document.createElement("div")
divIntro.className = "helloWatchAndIntroMenu"

let h2Intro = document.createElement('h2')
h2Intro.innerHTML = "Introduction to Swift"
h2Intro.className = "helloWatchAndIntro"
divIntro.appendChild(h2Intro)

let pIntro = document.createElement('p')
pIntro.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."
pIntro.className = "pHelloAndIntro"
divIntro.appendChild(pIntro)

divContainer.appendChild(divIntro)

//------------------------------------------------------
let orangeBarIntro = document.createElement('div')
orangeBarIntro.className = "container orangeBar"

let commentIntro = document.createElement('div')
commentIntro.innerHTML = "15 comments"
orangeBarIntro.appendChild(commentIntro)

let likeIntro = document.createElement('div')
likeIntro.innerHTML = " 45 likes"
orangeBarIntro.appendChild(likeIntro)


divIntro.appendChild(orangeBarIntro)