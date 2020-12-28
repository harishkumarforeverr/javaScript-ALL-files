var moment=require('moment-timezone');
moment.tz.setDefault('Asia/Tokyo');
let gtime;
if(process.argv.length!=3){
    console.log("runtime error ");
    process.exit(1);
}
else{ 
    gtime=process.argv[2];
} 
console.log(moment.tz(gtime).format()); 