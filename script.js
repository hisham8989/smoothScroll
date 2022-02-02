var navBarAnchors = document.querySelectorAll('nav a')
var scrollInterval;
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
    scrollInterval = setInterval(function(){
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
