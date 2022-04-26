// DATA will store the informatoin about videos
let DATA = { snippets:[],id:[]};
let start=0,end=5,incr=5;



// fetching the data from YouTube api
function loadData(){
let snippet_url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=AIzaSyBQpnJ-vyy8pj8K5Hrzp3BHKeEcXZIqoNA&q=";
let statistics_url="https://youtube.googleapis.com/youtube/v3/videos?part=statistics&key=AIzaSyBQpnJ-vyy8pj8K5Hrzp3BHKeEcXZIqoNA&id=";
let d = document.querySelector("#srch_query");
snippet_url = snippet_url +d.value;
// fetching the information with the help of url
fetch(snippet_url).then(response => response.json()).then(function (data){
  DATA.snippets = data.items;
  DATA.id=[];
  for(let i=0;i<15;i++){
   statistics_url += data.items[i].id.videoId+',';
   DATA.id.push(data.items[i].id.videoId);
  }
 // fetch_stat_data(statistics_url);
 display(window.outerWidth);
});

 }


 
// fetching views of each videos
 function fetch_stat_data(url){
   fetch(url).then(res => res.json()).then(data => {
     let Data = data.items;
      for(let i=0;i<15;i++){let flag=0;
        for(let j=0;j<Data.length;j++){
         
          if(DATA.id[i] == undefined)continue;
          if(DATA.id[i] == Data[j].id){
              DATA.snippets[i].snippet.viewCount = Data[j].statistics.viewCount;
              flag=1;
            }
          
        }
        
      }
      
  display(window.outerWidth);
   });
 }
 // rendering the data into html with the help of mustache.js
function showitems(DATAS){
    document.querySelector("#content").innerHTML = Mustache.render(document.querySelector("#sample_template").innerHTML,DATAS)
}
 
// display function will show the videos according to the screen size of the window
// and paginate accordingly.
function display(width){
  start=0;end=5;incr=5;
  let data = { snippets : DATA.snippets.slice(start,end)}; 
  showitems(data);
  pagination();
  draw_page();
}

loadData();