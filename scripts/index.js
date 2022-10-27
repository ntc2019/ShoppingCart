// Page open anim
let bannerPizzaAnim = anime({
    targets: '.banner-imgs .banner-pizza',
    opacity:{
        value:[0,1],
        duration: 200,
    },
    scaleY: [
      {value:[1,0.7],duration: 300,easing:'cubicBezier(0.455, 0.480, 0.000, 0.995)'},
      {value:[0.7,1.3],duration: 300,easing: 'cubicBezier(0.460, 0.035, 1.000, 0.045)'},
      {value: 0.8,duration: 150},
      {value:1.2,duration: 100},
      {value: 0.95,duration: 200},
      {value:1,duration: 100}
      
    ],
    scaleX: [
      {value:[1,1.3],duration: 300,easing:'cubicBezier(0.455, 0.480, 0.000, 0.995)'},
      {value:[1.3,0.7],duration: 300,easing: 'cubicBezier(0.460, 0.035, 1.000, 0.045)'},
      {value: 1.2,duration: 150},
      {value: 0.8,duration: 100},
      {value: 1.05,duration: 200},
      {value:1,duration: 100}
    ],
    easing: 'easeInOutSine',
    delay: 200
});

let mushroomVegAnim = anime({
    targets: '.banner .bg .mushroom-veg',
    opacity:{
        value:[0,1],
        easing: 'easeOutSine'
    },
    translateX:{
        value:['-30%',0],
        easing:'easeOutSine'
    },
    duration: 500,
    delay: 200  
    
})

let tomatoesAnim = anime({
    targets: '.banner .bg .tomatoes',
    opacity:{
        value:[0,1],
        easing: 'easeOutSine'
    },
    translateY:{
        value:['-30%',0],
        easing:'easeOutSine'
    },
    duration: 500,
    delay: 200  
    
})

let vegThreeAnim = anime({
    targets: '.banner .bg .veg-three',
    opacity:{
        value:[0,1],
        easing: 'easeOutSine'
    },
    translateX:{
        value:['30%',0],
        easing:'easeOutSine'
    },
    duration: 500,
    delay: 200  
    
})

let mushroomAnim = anime({
    targets: '.banner .bg .mushroom',
    opacity:{
        value:[0,1],
        easing: 'easeOutSine'
    },
    translateX:{
        value:['-50%',0],
        easing:'easeOutSine'
    },
    translateY:{
        value:['-50%',0],
        easing:'easeOutSine'
    },
    rotate:{
        value: [-70,20],
        easing:'easeOutSine'
    },
    duration: 400,
    delay: 400  
    
})

let vegTwoAnim = anime({
    targets: '.banner .bg .veg-two',
    opacity: {
        value: [0,1],
        easing: 'easeOutSine'
    },
    translateY:{
        value: ['-30%',0],
        easing:'easeOutSine'
    },
    translateX:{
        value: ['30%',0],
        easing:'easeOutSine'
    },
    rotate:{
        value: [20,0],
        easing:'easeOutSine'
    },
    duration: 400,
    delay: 400
})