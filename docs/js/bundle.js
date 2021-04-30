/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
var slideshows = document.querySelectorAll('[data-component="slideshow"]');

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll("#".concat(slideshow.id, " [role=\"list\"] .slide"));
  var index = 0;
  var time = 5000;
  slides[index].classList.add('active');
  setInterval(function () {
    slides[index].classList.remove('active');
    index += 1;
    if (index === slides.length) index = 0;
    slides[index].classList.add('active');
    console.log(slides);
  }, time);
}

slideshows.forEach(initSlideShow);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNsaWRlc2hvd3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbml0U2xpZGVTaG93Iiwic2xpZGVzaG93Iiwic2xpZGVzIiwiaWQiLCJpbmRleCIsInRpbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRJbnRlcnZhbCIsInJlbW92ZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiw4QkFBMUIsQ0FBbkI7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsU0FBdkIsRUFBa0M7QUFDaEMsTUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNDLGdCQUFULFlBQThCRSxTQUFTLENBQUNFLEVBQXhDLDZCQUFmO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUNBSCxRQUFNLENBQUNFLEtBQUQsQ0FBTixDQUFjRSxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixRQUE1QjtBQUNBQyxhQUFXLENBQUMsWUFBTTtBQUNoQk4sVUFBTSxDQUFDRSxLQUFELENBQU4sQ0FBY0UsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsUUFBL0I7QUFFQUwsU0FBSyxJQUFJLENBQVQ7QUFDQSxRQUFJQSxLQUFLLEtBQUtGLE1BQU0sQ0FBQ1EsTUFBckIsRUFBNkJOLEtBQUssR0FBRyxDQUFSO0FBQzdCRixVQUFNLENBQUNFLEtBQUQsQ0FBTixDQUFjRSxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixRQUE1QjtBQUNBSSxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsTUFBWjtBQUNELEdBUFUsRUFPUkcsSUFQUSxDQUFYO0FBUUQ7O0FBRURSLFVBQVUsQ0FBQ2dCLE9BQVgsQ0FBbUJiLGFBQW5CLEUiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2xpZGVzaG93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbXBvbmVudD1cInNsaWRlc2hvd1wiXScpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFNsaWRlU2hvdyhzbGlkZXNob3cpIHtcclxuICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtzbGlkZXNob3cuaWR9IFtyb2xlPVwibGlzdFwiXSAuc2xpZGVgKTtcclxuICBsZXQgaW5kZXggPSAwO1xyXG4gIGNvbnN0IHRpbWUgPSA1MDAwO1xyXG4gIHNsaWRlc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBpbmRleCArPSAxO1xyXG4gICAgaWYgKGluZGV4ID09PSBzbGlkZXMubGVuZ3RoKSBpbmRleCA9IDA7XHJcbiAgICBzbGlkZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgY29uc29sZS5sb2coc2xpZGVzKTtcclxuICB9LCB0aW1lKTtcclxufVxyXG5cclxuc2xpZGVzaG93cy5mb3JFYWNoKGluaXRTbGlkZVNob3cpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9