
// adding event Listener for the Search button
// to retrieve the search query.
let srch_btn = document.querySelector("#srch_btn");
srch_btn.addEventListener("click",function(event) {
  start=0;end=5;
 loadData();
});
// adding eventListener to the Search box.
// It happen when the user click the "Enter" button.
let srch_q = document.querySelector("#srch_query");
srch_q.addEventListener("keydown",(event)=>{
 if(13 == event.keyCode){
   start=0;end=5;
   loadData();
 }
});

// display function will show the videos according to the screen size of the window
// and paginate accordingly.
function display(width){
  if(width>=1025){
    start=0
    end=5;
    incr=5;
    data={snippets:DATA.snippets.slice(start,end)};
    showitems(data);
    pagination(3);
    draw_page(3);
  }
  else if(width >= 769){
    start=0;
    end=4;
    incr=4;
    data={snippets:DATA.snippets.slice(start,end)};
    showitems(data);
    pagination(4);
    draw_page(4);
  }
  else if(width >= 426){
    start=0;
    end=3;
    incr=3;
    data={snippets:DATA.snippets.slice(start,end)};
    showitems(data);
    pagination(5);
    draw_page(5);
  }
  else if(width >= 376 ){
    start=0;
    end=2;
    incr=2;
    data={snippets:DATA.snippets.slice(start,end)};
    showitems(data);
    pagination(8);
    draw_page(8);
  }
  else{
    start=0;
    end=1;
    incr=1;
    data={snippets:DATA.snippets.slice(start,end)};
    showitems(data);
    pagination(15);
    draw_page(15);
  }
}
window.addEventListener('resize', (e)=> {
  display(window.outerWidth);


});

