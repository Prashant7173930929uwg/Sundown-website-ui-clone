console.log("hello") ;

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