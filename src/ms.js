//const TweenMax = require ('gsap');
//import {TimelineMax} from 'gsap';
import TweenMax from 'gsap';
import clamp from 'clamp';





$(document).ready(function () {

/*-------canvas-----*/
  let state = {pos:0};

  let cols = 50;
  let rows = 50;
  let canvas = $('#canvas')[0];
  //let canvas = $('.canvas')[0];
  let context = canvas.getContext("2d");
  let image = $('#image1')[0];
  let image2 = $('#image2')[0];

  let newcanvas = $('<canvas></canvas>')[0];
  let newcontext = newcanvas.getContext("2d");


  //$('body').click(function(event) {
  //	let tl = new TimelineMax();

  //	tl.to(state, 1, {pos:1});
  //});

  $('.sec-img').mouseover(function(event) {
    let tl = new TimelineMax();

    if(state.pos===2) {
      tl.to(state, 1, {pos: 0});
    } else{
      tl.to(state, 1, {pos: 2});
    }
  });

  ///*$('body').mouseover(function(event) {
  //	let tl = new TimelineMax();

  //	if(state.pos===2) {
  //		tl.to(state, 1, {pos: 0});
  //	} else{
  //		tl.to(state, 1, {pos: 2});
  //	}
  //});

  function setCanvasSize(canvas) {
  	//canvas.width = 1050;
  	//canvas.height = 600;
    canvas.width = 728;
  	canvas.height = 523;
  	$(canvas).css('width', "65%");
  	$(canvas).css('height', "30%");
  }

  setCanvasSize(canvas);
  setCanvasSize(newcanvas);
  //$('body').prepend(newcanvas);
  let xw,xh,delay;

  function RenderTempCanvas(t) {
  //  newcontext.clearRect(0,0,1050,600);
    newcontext.clearRect(0,0,728,523);
    newcontext.drawImage(image2, 0,0);
    //newcontext.clearRect(0,0,100 + t/10,100 + t/10);
  	//newcontext.clearRect(0,0,1800,1200);
  	// newcontext.fillRect(0,0,1800,1200);
  	//newcontext.drawImage(image2, 0,0);
  	// newcontext.clearRect(0,0,100 + t/10,100 + t/10);
  	//xw = 1800/cols;
  	//xh = 1200/rows;
  	//for (var i = 0; i<=cols; i++) {
  	//	for (var j = 0; j<=rows; j++) {
  	//		delay = (j*i)/(cols*rows);
  	//		newcontext.clearRect(i*xw,j*xh,xw*clamp(state.pos -delay,0,1),xh*clamp(state.pos -delay,0,1));
  	//	}
  	//}
    xw = 1800/cols;
  	xh = 1200/rows;
    for (var i = 0; i<=cols; i++) {
      for (var j = 0; j<=rows; j++) {
        delay = (j*i)/(cols*rows);
  			newcontext.clearRect(i*xw,j*xh,xw*clamp(state.pos -delay,0,1),xh*clamp(state.pos -delay,0,1));
        //newcontext.clearRect(i*xw,j*xh,xw*state.pos,xh*state.pos);
        //newcontext.clearRect(i*xw,j*xh,xw/2,xh/2);
      }
    }
  }

  function render(t) {
  	context.clearRect(0,0,728,523);
  	context.drawImage(image, 0,0);

    //context.clearRect(0,0,100,100);
  	RenderTempCanvas(t);

  	context.drawImage(newcanvas, 0,0);

  }


  function draw(t) {
  	render(t);
  	window.requestAnimationFrame(draw);
  }

draw();

});
