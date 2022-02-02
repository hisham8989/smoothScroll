var navBarAnchors = document.querySelectorAll('nav a');

for(var i = 0;i<navBarAnchors.length;i++){
    navBarAnchors[i].addEventListener('click',function(event){
        event.preventDefault()
        for (let i in this.href) {
            if(this.href[i] === '#'){
                i = 1*i;
                var targetSectionId = this.href.slice(i+1)
                break;
            }
        }
        var targetSection = document.getElementById(targetSectionId)
        targetSectionCordinates = targetSection.getBoundingClientRect()

        var scrollInterval = setInterval(function(event){
            targetSectionCordinates = targetSection.getBoundingClientRect()
            if(targetSectionCordinates.top <= 0){
                clearInterval(scrollInterval);
                return
            }
            window.scrollBy(0,100)
        },15)

    })
}