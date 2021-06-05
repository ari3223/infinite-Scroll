class UI_API {
    
    loadinStart(){
        document.querySelector('.loader').hidden = false;

    }
     ////switch from loading to main page
    loadingEnd(){
        document.querySelector('.loader').hidden = true;
    }
   
    getAddPic(){
       getadd()
       async function getadd() {
           try{
               
           let info = await fetch('https://api.unsplash.com/photos/random/?client_id=yDVFRyJJuZxQBlLBu19sApQq2pxAvtgQ0JxZjH4eJUI&count=10');
           
           let data = await info.json();
           data.forEach(function (elem, index) {

                 let div      = document.createElement('div'),
                     a        = document.createElement('a'),
                    img      = document.createElement('img');
               img.src = elem.urls.regular;
               img.classList.add('forload');
               img.alt = elem.alt_description;
               a.href = elem.links.html;
               a.target = '_blank';
               a.appendChild(img);
               picplace.appendChild(a);
               if(index === 2 && img.complete){
                   alert('salam')
                  }
               
               });
       }
           catch(er){
               console.log('error is:' + er);
       }
    }
       
   }
}

