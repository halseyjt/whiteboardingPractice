// growing plant
// each day plants by up speed meters, at night plant

// I: upspeed: Number, downspeed: Number, desired height: Number
// O: number of days to reach desired height
// C: One seed at a time
// E: 

// 2, 1, 5
// day 1 = 2 - 1 = 1 
// day 2 = 1 + 2 - 1 = 2
// day 3 = 2 + 2 - 1 = 3
// day 4 = 3 + 2 - 1 = 4
// day 5 = 4 + 2 - 1 = 5

// create function
// subtract downspeed from the upspeed
// add previous result to the upspeed subtract downspeed
// add previous result to the upspeed subtract downspeed
// add previous result to the upspeed subtract downspeed
// add previous result to the upspeed subtract downspeed
// add previous result to the upspeed subtract downspeed
// return final result 

const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
    let height = 0;
    let day = 0;
    while (height < desiredHeight){
        height += upSpeed - downSpeed; 
        day ++
    }
      return day;

    // if (height === desiredHeight){
    //     return day;
    // } else {
    //     height += upSpeed - downSpeed;
    // }
    //   result ++
}