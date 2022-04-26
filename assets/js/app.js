
// adding event Listener for the Search button
// to retrieve the search query.
let srch_btn = document.querySelector("#srch_btn");
srch_btn.addEventListener("click",function(event) {
 loadData();
});
// adding eventListener to the Search box.
// It happen when the user click the "Enter" button.
let srch_q = document.querySelector("#srch_query");
srch_q.addEventListener("keydown",(event)=>{
 if(13 == event.keyCode){
   loadData();
 }
});




window.addEventListener('resize', (e)=> {
  change_slide(0);
  current_sld_no=0;
  slider(window.outerWidth);
});

