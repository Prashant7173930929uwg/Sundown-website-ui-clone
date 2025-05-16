 console.log('hello') ;

let elemContainer = document.querySelector('#elem-Container') ;
let fixedImage = document.querySelector('#fixed-image') ;

console.log(elemContainer) ;

elemContainer.addEventListener('mouseenter',()=>{
    fixedImage.style.display = 'block' ;
})

elemContainer.addEventListener('mouseleave', ()=>{
    fixedImage.style.display = 'none' ;
})

let elements = document.querySelectorAll('.elem') ;
console.log(elements) ;
elements.forEach((elem)=>{
    console.log(elem) ;
   elem.addEventListener('mouseenter',()=>{
    console.log('you are here') ;
    let URL = elem.getAttribute('data-image') ;
    if(URL==="https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"){
       
    }
     console.log("here the problem ",URL) ;
    fixedImage.style.backgroundImage = `url(${URL})` ;
   })
}) ;



let head1 = document.querySelector('#head1') ;
let head2 = document.querySelector('#head2') ;
let head3 = document.querySelector('#head3') ;
let para = document.querySelector("#page3-para") ;
let imgContainer = document.querySelector('#img-container') ;

head1.addEventListener('click', ()=>{
    head1.style.color = 'white' ;
    head2.style.color = 'rgb(144, 144, 144) ' ;
    head3.style.color = 'rgb(144, 144, 144) ' ;
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus rem nesciunt sint quibusdam! Aliquam, ipsam suscipit voluptatem velit iure nemo recusandae nulla accusamus exercitationem ratione, perferendis illum quis vel iusto repudiandae excepturi, minus quibusdam." ;
    imgContainer.style.backgroundImage = 'url("design.jpg")' ;

})

head2.addEventListener('click', ()=>{
    head2.style.color = 'white' ;
    head1.style.color = 'rgb(144, 144, 144) ' ;
    head3.style.color = 'rgb(144, 144, 144) ' ;
     para.innerHTML = "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, et beatae incidunt alias dolorum reprehenderit cupiditate voluptate sunt distinctio eos!" ;
     imgContainer.style.backgroundImage = 'url("project.jpg")' ;
    

})

head3.addEventListener('click', ()=>{
    head3.style.color = 'white' ;
    head1.style.color = 'rgb(144, 144, 144)' ;
    head2.style.color = 'rgb(144, 144, 144)' ;

     para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta fugit consequatur aliquam aperiam mollitia quod consectetur, illum veniam molestiae cupiditate nam! Autem deserunt laboriosam nostrum consequuntur ipsum molestias saepe, deleniti veritatis tempore corporis asperiores eos et aspernatur nisi sit." ;
     imgContainer.style.backgroundImage = 'url("execution.jpeg")' ;

})


 window.addEventListener('load', () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

let menu = document.querySelector("nav h3") ;
let full = document.querySelector("#full-scr") ;
let navimg = document.querySelector("nav img") ;
let flag = 0 ;
menu.addEventListener('click', ()=>{
  if(flag === 0){
    full.style.top = 0 ;
    navimg.style.opacity = 0 ;
    flag = 1 ;
  }
  else{
    full.style.top = "-100%" ;
    navimg.style.opacity = 1 ;
    flag = 0 ;
  }
})

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

loaderAnimation() ;