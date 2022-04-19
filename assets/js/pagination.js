//Making pagination by displaying the page button depending on 
// the number of page we want.
function pagination(n){
    page_no = {pages:[]};
    for(let i=1;i<=n;i++)
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
function draw_page(n){
  let page = document.querySelectorAll('.page_no');
  for(let i=0;i<n;i++)
  page[i].addEventListener('click', (e)=>{
     goToPage(parseInt( page[i].textContent),showitems);
  });
  }
 
