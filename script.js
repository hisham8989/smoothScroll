var navBarAnchors = document.querySelectorAll('nav a')
var scrollInterval
for (var i = 0; i < navBarAnchors.length; i++) {
  navBarAnchors[i].addEventListener('click', function (event) {
    event.preventDefault()
    for (let i in this.href) {
      if (this.href[i] === '#') {
        i = 1 * i
        var targetSectionId = this.href.slice(i + 1)
        break
      }
    }
    var targetSection = document.getElementById(targetSectionId)
    targetSectionCordinates = targetSection.getBoundingClientRect()

    /** The One Way of doing */
    //     var scrollInterval = setInterval(function () {
    //       targetSectionCordinates = targetSection.getBoundingClientRect()
    //       if (targetSectionCordinates.top <= 0) {
    //         clearInterval(scrollInterval)
    //         return
    //       }
    //       window.scrollBy(0, 100)
    //     }, 15)
    //   })

    /** if function need agruments then pass it in pass it in third argument */
    // scrollInterval = setInterval(scrollVertically, 15, targetSection)

    /** Third way of doing the same thing */
    scrollInterval = setInterval(function () {
      scrollVertically(targetSection)
    }, 15)
  })
}

function scrollVertically(targetSection) {
  targetSectionCordinates = targetSection.getBoundingClientRect()
  if (targetSectionCordinates.top <= 0) {
    clearInterval(scrollInterval)
    return
  }
  window.scrollBy(0, 100)
}

var progressBars = document.querySelectorAll('.skill-progress > div')

var skillContainer = document.getElementById('skills-container')

// check for each and every bar
for (let bar of progressBars) {
  window.addEventListener('scroll', checkScroll)
  let animationDone = false
  function checkScroll() {
    var cordinates = bar.getBoundingClientRect()
    if (!animationDone && cordinates.top <= window.innerHeight) {
      animationDone = true
      fillBar(bar)
    } else if (cordinates.top > window.innerHeight) {
      animationDone = false
      initialiseBar(bar)
    }
  }

  function initialiseBar(bar) {
    bar.style.width = 0 + '%'
  }

  initialiseBar(bar)

  function fillBar(bar) {
    let targetWidth = bar.getAttribute('data-bar-width')
    let currentWidth = 0

    let interval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(interval)
        return
      }
      currentWidth++
      bar.style.width = currentWidth + '%'
    }, 4)
  }
}

/** finished bar animation */

// // check for each and every bar
// window.addEventListener('scroll', checkScroll)
// var animationDone = false
// function checkScroll() {
//   var cordinates = skillContainer.getBoundingClientRect()
//   if (!animationDone && cordinates.top <= window.innerHeight) {
//     animationDone = true
//     fillBars()
//   }else if(cordinates.top > window.innerHeight){
//     animationDone = false;
//     initialiseBar()
//   }
// }

// function initialiseBar() {
//   for (let bar of progressBars) {
//     bar.style.width = 0 + '%'
//   }
// }

// initialiseBar()

// function fillBars() {
//   for (let bar of progressBars) {
//     let targetWidth = bar.getAttribute('data-bar-width')
//     let currentWidth = 0

//     let interval = setInterval(function () {
//       if (currentWidth > targetWidth) {
//         clearInterval(interval)
//         return
//       }
//       currentWidth++
//       bar.style.width = currentWidth + '%'
//     }, 4)
//   }
// }

/*
var skillSection = document.getElementById('skills');
var skillSectionCordinates = skillSection.getBoundingClientRect();

// console.log("how distant skill section",skillSectionCordinates.top);
// console.log("Where page is",window.pageYOffset);

// console.log(window.scroll);

while(window.pageYOffset===skillSectionCordinates.top){
    console.log("dikha");
}

if(skillSectionCordinates.top === 0){
    console.log("skill aa gya");
}
//  while(true){
//     if(window.pageYOffset == skillSectionCordinates.top){
//    console.log(true);
//    break;
// }
// }

*/
