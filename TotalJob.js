
let cards = document.querySelectorAll(".card-body");
let total = cards.length;

// Total-count
document.getElementById("total-card").innerText = total;
document.getElementById("total-card2").innerText = total;



// INTERVIEW buttons
const interviewButtons = document.querySelectorAll('.Interview');
interviewButtons.forEach(function(btn){
  btn.addEventListener('click', function(){



    const appliedBtn = btn.closest('.card-body').querySelector('.Not-Applied');
    appliedBtn.innerText = "APPLIED";
    appliedBtn.classList.remove("btn-active");
    appliedBtn.classList.add("btn-success");
    
    // const cardClone = card.cloneNode(true);
//     
// const Tab2 = document.querySelector('.Applied2');
// Tab2.appendChild(card);
const Tab2 = document.querySelector('.Applied2');
const card = btn.closest('.card-body');
    const cardClone = card.cloneNode(true);

    Tab2.appendChild(cardClone);
   
  });
  
});

// REJECTED buttons
const rejectedButtons = document.querySelectorAll('.rejected');
rejectedButtons.forEach(function(btn){
  btn.addEventListener('click', function(){
    const appliedBtn = btn.closest('.card-body').querySelector('.Not-Applied');
    appliedBtn.innerText = "REJECTED";
    appliedBtn.classList.remove("btn-secondary");
    appliedBtn.classList.add("btn-error");

//     const cardRej = btn.closest('.card-body');
// const Tab3 = document.querySelector('.Rejected2');
// Tab3.appendChild(cardRej);
const Tab3 = document.querySelector('.Rejected2');
const card2 = btn.closest('.card-body');
    const cardClone2 = card2.cloneNode(true);

    Tab3.appendChild(cardClone2);
    
  });
});


// DELETE-BUTTON

