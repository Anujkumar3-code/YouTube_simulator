let current_slide;
let current_sld_no=0;
let slides={s:[]};
// display the slider controller like dots and arrow
function slider(){
    slides.s=[];
    getslidesdot(window.outerWidth);
    document.querySelector('#slide').innerHTML = Mustache.render(document.querySelector('#slider').innerHTML,slides);
    current_slide = document.querySelector(".sld");
    current_slide.style.backgroundColor="red";
    current_slide.style.color="red";
    click_dot();
 }

  // adding eventlistener to slide dots
  function click_dot(){let slide_page = document.querySelectorAll(".sld");
  slide_page.forEach(slide => {
    slide.addEventListener("click",(e)=>{
        if(current_slide != undefined)
          remove_property();    
      let new_start=slide.textContent-1;
      current_sld_no=new_start;
      slide.style.backgroundColor="red";
      slide.style.color="red";
        change_slide(new_start);
      current_slide=slide;
    });
  });
    }
 // function for prev and next button of slider.
function incr_decr_slide(n){
    if(current_sld_no+n >=0 && current_sld_no+n<slides.s.length){
        let slide=document.querySelectorAll('.sld')[current_sld_no+n];
        slide.style.backgroundColor="red";
        slide.style.color="red";
        change_slide(current_sld_no+n);
        remove_property();
        current_slide=slide;
        current_sld_no+=n;
    }
}

// making dots according to the window width.
function getslidesdot(width){
  let win_width=[[1441, 1],[1025,2],[769,2],[426,3],[376,5]];
  for(let i=4;i>=0;i--){
    if(width < win_width[i][0]){
      for(let j=0;j<win_width[i][1];j++)
      slides.s.push({value:j+1});
      break;
    }
  }
}
function change_slide(n){
    document.querySelector("#content").style.left=n*(-100)+"vw";
}

function remove_property(){
    current_slide.style.backgroundColor="white";
    current_slide.style.color="white";
}
 slider();

