//Making pagination by displaying the page button depending on 
// the number of page we want.
function pagination(){
    page_no = {pages:[]};
    for(let i=1;i<=3;i++)
    page_no.pages.push({itr:i});
    document.querySelector('#pagination').innerHTML = Mustache.render(document.querySelector('#pagination_no').innerHTML,page_no);
 }

// showing the data in the screen for the corresponding page.
 function goToPage(pageNo,show_items) {
   start=(pageNo-1)*incr;
   end=start+incr;
   data={snippets:DATA.snippets.slice(start,end)};
   show_items(data);
 }

 // adding the eventListener to the Page Number.
function draw_page(){
  let page = document.querySelectorAll('.page_no');
  for(let i=0;i<3;i++)
  page[i].addEventListener('click', (e)=>{
    change_slide(0);
    current_sld_no=0;
    if(current_slide != undefined) remove_property();
    current_slide = document.querySelector(".sld");
    current_slide.style.backgroundColor="red";
    current_slide.style.color="red";
     goToPage(parseInt( page[i].textContent),showitems);
  });
  }
 
