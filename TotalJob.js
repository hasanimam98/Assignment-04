
// function updateCount(){
//   const total = document.querySelectorAll("#mainJobs .card-body").length;

//   document.getElementById("total-card").innerText = total;
//   document.getElementById("total-card2").innerText = total;
// }
function updateCount() {
  const all = document.querySelectorAll("#mainJobs .card-body").length;
  const interview = document.querySelectorAll(".Applied2 .card-body").length;
  const rejected = document.querySelectorAll(".Rejected2 .card-body").length;

  document.getElementById("total-card").innerText = all;
  document.getElementById("interview-count").innerText = interview;
  document.getElementById("rejected-count").innerText = rejected;
  

  const activeTab = document.querySelector('input[name="my_tabs"]:checked').getAttribute("aria-label");

  let available = 0;

  if(activeTab === "All"){
    available = all;
  }
  else if(activeTab === "INTERVIEW"){
    available = interview;
  }
  else if(activeTab === "REJECTED"){
    available = rejected;
  }

  document.getElementById("total-card2").innerText = available;
}






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
    updateCount();
   
    
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
    // Tab3.appendChild(card);
    
    updateCount();
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
 document.querySelectorAll('input[name="my_tabs"]').forEach(tab => {
  tab.addEventListener('change', updateCount);
});
 updateCount();


