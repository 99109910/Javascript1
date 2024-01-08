const correctAnswers=['Y','Y','Y','Y'];
const form=document.querySelector('.question-form');
const result = document.querySelector('.result');


form.addEventListener('submit',e=>{
    e.preventDefault();

    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]

    userAnswers.forEach((answer,index)=>{
       if(answer === correctAnswers[index])
       {
          score +=25;
       }
    })

    // console.log(score);
    result.classList.remove('d-none');
    let point=0;  
    const print = setInterval(() => {
    result.querySelector('span').textContent = `${point}%`;
    if(point == score)
    {
        clearInterval(print)
    }
    else
    {
        point++;
    }
    }, 10);
    

})

// let i=0;
// const print =  setInterval(() => {
//     console.log('Can')
//     i++;
//     if(i == 4)
//     {
//         clearInterval(print);
//     }
// }, 1000);