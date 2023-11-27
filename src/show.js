let wish = document.getElementById('heart');
let logo = document.getElementsByClassName('logoBox');
let mainImage = document.querySelector('.imgRes');

// wish.addEventListener('click',()=>{
    // console.log('Clicked');
    if(wish.getAttribute('class')==="far fa-heart"){
        // wish.setAttribute('class',"fas fa-heart");
        wish.style = "color:black";
    }
    else{
        // wish.setAttribute('class',"far fa-heart");
        wish.style = "color:red";
    }
// })

for (let i = 0; i < logo.length; i++) {
    logo[i].addEventListener('click', () => {
        mainImage.src = logo[i].querySelector('.smlogo').src;
        // console.log('Logo Clicked!!');
    });
}


let prompts = document.getElementsByClassName('prompt');

Array.from(prompts).forEach(prompt => {
    prompt.addEventListener('click', () => {
        alert('Please Login !!');
    });
});


