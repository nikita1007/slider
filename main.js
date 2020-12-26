document.addEventListener('DOMContentLoaded', function() {
  
  const btn_next     = document.querySelector('#btn-next'),
        btn_prev     = document.querySelector('#btn-prev'),
        slider_wrap  = document.querySelector('.slider__wrap'),
        slider_items = document.querySelectorAll('.slider__item');

  let offset = 0;

  btn_next.addEventListener('click', function() { 
    if (offset < slider_items.length) {
      for ( slide of slider_items) {
        slide.style.transform = "translateX(-" + (100 * offset + 100) + "%)";
      }
      offset++;
    }
    if (offset == slider_items.length) {
      for ( slide of slider_items) {
        slide.style.transform = "translateX(0%)";
      }
      offset = 0;
    }
    console.log(offset);
  });

  btn_prev.addEventListener('click', function() { 
    if (offset == 0) {
      offset = slider_items.length;
      for ( slide of slider_items) {
        slide.style.transform = "translateX(-" + (100 * offset - 100) + "%)";
      }
    }
    if (offset <= slider_items.length) {
      for ( slide of slider_items) {
        slide.style.transform = "translateX(-" + (100 * offset - 100) + "%)";
      }
      offset--;
    }
    console.log(offset);
  });
  console.log(slider_items.length);
});