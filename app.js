const submit_btn = document.querySelector('.submit-btn');
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const ratingBtn = document.querySelectorAll('.rating-btn')
const score = document.querySelector('.score');
let star_score = 3

submit_btn.addEventListener('click', onSubmit);
ratingBtn.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});
function onSubmit() {
    /* console.log('submit click') */
    card1.classList.add('hide');
    score.textContent = star_score;
    card2.classList.remove('hide');
}

function handleRatingBtnClick(event){
    ratingBtn.forEach( btn => {
        btn.classList.remove('active');
    });

    if(event.target.classList.contains('rating-btn')){
        event.target.classList.add('active');
    }else{
        event.target.parantElement.classList.add('active');
    }

    star_score = event.target.textContent;
    /* console.log('rating click'); */
    console.log(star_score);

}
/* console.log(ratingBtn); */