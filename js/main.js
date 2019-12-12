//we set visibility:hidden in the CSS to avoid an initial flash - make them visible now, but the from() tweens are going to essentially hide them anyway because their stroke position/length will be 0.
//gsap.set(".plugin-stroke, .st1", {visibility:"visible"});

var tl = gsap.timeline();



//animate the plugin text first, drawing to 100%
//tl.from(".plugin-stroke, .st1", {duration: 8, drawSVG:0, ease:"power1.inOut"});
  tl.set("#startingPoint1", {visibility: "visible"});
  //tl.set("#startingPoint1", {display: "block"});
  tl.from("#startingPoint1", {duration: 1.5, opacity:0, scale:0.3}, ">2");
  tl.to("#startingPoint1", {duration: 1.5, opacity:0, scale:0.3}, ">2");
//  tl.set("#startingPoint1", {display:"none"});
  tl.set("#startingPoint2", {visibility: "visible"});
  tl.from("#startingPoint2", {duration: 1.5, opacity:0, scale:0.3}, ">1");
  tl.to("#startingPoint2", {duration: 1.5, opacity:0, scale:0.3}, ">2");
//  tl.set("#startingPoint2", {display:"none"});
  tl.set("#startingPoint3", {visibility: "visible"});
  tl.from("#startingPoint3", {duration: 1.5, opacity:0, scale:0.3}, ">1");
  tl.to("#startingPoint3", {duration: 1.5, opacity:0, scale:0.3}, ">2");
//  tl.set("#startingPoint3", {display:"none"});
  tl.set("#startingPoint4", {visibility: "visible"});
  tl.from("#startingPoint4", {duration: 1.5, opacity:0, scale:0.3}, ">1");
  tl.to("#startingPoint4", {duration: 1.5, opacity:0, scale:0.3}, ">2");
  //tl.set("#startingPoint4", {display:"none"});
  tl.set("#startingPoint5", {visibility: "visible"});
  tl.from("#startingPoint5", {duration: 1.5, opacity:0, scale:0.3}, ">1");
  tl.to("#startingPoint5", {duration: 1.5, opacity:0, scale:0.3}, ">2");
  tl.to("#silhouette", {duration:1.5, opacity:0}, ">1");
  tl.set("#startingPoint6", {visibility: "visible"});
  tl.from("#startingPoint6", {duration: 1.5, opacity:0, scale:0.3}, ">1");
  tl.set(".scrolldownArrow", {visibility: "visible"});
  tl.from(".scrolldownArrow", {duration: 1.5, opacity:0}, ">1");
