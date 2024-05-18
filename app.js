const form = document.querySelector('#submitform');
const bottomText = document.querySelector('#bottomText');
const topText = document.querySelector('#topText');
const image = document.querySelector('#image');


const ul = document.querySelector('#meme');
form.addEventListener('submit',function(e){
    e.preventDefault();

    const div = document.createElement('div');
    const bottDiv = document.createElement('div');
    bottDiv.innerText = bottomText.value;
    bottDiv.classList.add('overlay-text-bottom');
    const topDiv = document.createElement('div');
    topDiv.innerText = topText.value;
    topDiv.classList.add('overlay-text-top');
    const imageElement = document.createElement('img');
    imageElement.src = image.value;
    const li = document.createElement('li');
    const buttonOfRemoval = document.createElement('button');
    buttonOfRemoval.innerText = 'X'
    buttonOfRemoval.classList.add('removeButton');
    li.appendChild(buttonOfRemoval);
    div.appendChild(topDiv);
    div.appendChild(imageElement);
    div.appendChild(bottDiv);
    div.classList.add('image-container');
    div.classList.add('button');
    li.appendChild(div);
    ul.appendChild(li);

    image.value = '';
    bottomText.value = '';
    topText.value ='';

   const removeMemes = document.querySelectorAll('li button');

   for (let btn of removeMemes) {
    btn.addEventListener('click', function(e) {
        e.target.parentElement.remove();
        if (e.target.topText.length == 0) 
       return alert ("Text cannot be empty");
    });

// form.addEventListener('click',function(e) {
//     if (e.target.topText.length == 0) 
//        return alert ("Text cannot be empty");
//        if (e.target.bottomText.length == 0) 
//        return alert ("Text cannot be empty");
//        if (image == 0) 
//        return alert ("Image Url cannot be empty");
// });


    

    // document.getElementById("submit").addEventListener("click");
    //     let submit = ('#text');

    //     function clearText(){
    //     let text = document.getElementById('text');
    //     text.value = "";
    // };

    // let arrayFromLocalStorage = JSON.parse(localStorage.getItem('submit'));
    // arrayFromLocalStorage.push(input.value);

    // let array = JSON.stringify(arrayFromLocalStorage);

    // localStorage.setItem('submit', array);
    // input.value = '';
    // todoList.appendChild(bottText);
    // console.log(localStorage);
   }
});
