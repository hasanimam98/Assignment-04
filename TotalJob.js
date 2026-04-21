function updateCount(){
  const total = document.querySelectorAll(".card-body").length;

  document.getElementById("total-card").innerText = total;
  document.getElementById("total-card2").innerText = total;
}
document.querySelectorAll('.card-body').forEach((card, index) => {
  card.dataset.id = index;
});



document.addEventListener('click', function(e){

  // INTERVIEW
  if(e.target.closest('.Interview')){
    const btn = e.target.closest('.Interview');
    const card = btn.closest('.card-body');

    const appliedBtn = card.querySelector('.Not-Applied');
    appliedBtn.innerText = "APPLIED";
    appliedBtn.classList.remove("btn-active");
    appliedBtn.classList.add("btn-success");

    const Tab2 = document.querySelector('.Applied2');
    const cardClone = card.cloneNode(true);

   
    cardClone.dataset.id = card.dataset.id;

    Tab2.appendChild(cardClone);
  }

  // REJECTED
  if(e.target.closest('.rejected')){
    const btn = e.target.closest('.rejected');
    const card = btn.closest('.card-body');

    const appliedBtn = card.querySelector('.Not-Applied');
    appliedBtn.innerText = "REJECTED";
    appliedBtn.classList.remove("btn-active");
    appliedBtn.classList.add("btn-error");

    const Tab3 = document.querySelector('.Rejected2');
    const cardClone2 = card.cloneNode(true);

    cardClone2.dataset.id = card.dataset.id;

    Tab3.appendChild(cardClone2);
  }

  // DELETE
  if(e.target.closest('.dlt')){
    const card = e.target.closest('.card-body');
    const id = card.dataset.id;

    document.querySelectorAll(`[data-id="${id}"]`).forEach(el => {
      el.remove();
    });
    updateCount();
  }
  

});