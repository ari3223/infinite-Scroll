//classes
let ui = new UI_API();
//variabless
const imageContainer = document.querySelector('.image-container'),
      loader = document.querySelector('.loader'),
      picplace = document.querySelector('.image-container'),
      image  = picplace.querySelectorAll('.forload')[2],
      photosArray = [];




//evenLiseners
evenLiseners()
function evenLiseners(){
    document.addEventListener('DOMContentLoaded', function(e) {
        //ui.loadinStart();
        ui.getAddPic();
        
    });
    
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
            ui.getAddPic();
  }
});
       
  
}