//we set visibility:hidden in the CSS to avoid an initial flash - make them visible now, but the from() tweens are going to essentially hide them anyway because their stroke position/length will be 0.
//gsap.set(".plugin-stroke, .st1", {visibility:"visible"});

var tl = gsap.timeline();



//animate the plugin text first, drawing to 100%
//tl.from(".plugin-stroke, .st1", {duration: 8, drawSVG:0, ease:"power1.inOut"});
  tl.set("#startingPoint1", {visibility: "visible"});
  tl.from("#startingPoint1", {duration: 1.5, opacity:0, scale:0.3}, ">2");
    //console.log("in function");
    //keep on screen for x seconds, then remove and replace with next point
    //tl.from("#startingPoint1", {duration: 1.5, opacity:0, scale:0.3}, ">2"});
  //  tl.set("#startingPoint1", {display:"none"});
    tl.set("#startingPoint2", {visibility: "visible"});
    tl.from("#startingPoint2", {duration: 1.5, opacity:0, scale:0.3}, ">3");


//})
  //now animate the logo strokes (note we use "102% as FireFox 34 miscalculates the length of a few strokes)
//  .fromTo(".gray-line, .green-line, .green-line-thin", {drawSVG:0}, {duration: 2, drawSVG:"102%"}, "-=1")
  //fade in the real logo and the rest of the text
//  .to("#Plugin, #ByGreenSock, #logo", 1, {autoAlpha:1, ease:"none"})
  //hide the logo strokes that are now obscured by the real logo (just to improve rendering performance)
//  .set("#lines", {visibility:"hidden", onComplete: function() {
//  tl.set("#startingPoint1", {visibility: "visible"});
//  tl.from("#startingPoint1", {duration: 1.5, opacity:0, scale:0.3});
//    console.log("in function");
    //keep on screen for x seconds, then remove and replace with next point
  //  tl.set("#startingPoint2", {visibility: "visible"});
  //  tl.from("#startingPoint2", {duration: 1.5, opacity:0, scale:0.3}, ">3");

//  }
//});
