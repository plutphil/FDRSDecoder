const sensorTypes = [
    "STATUS",
    "TEMP",
    "TEMP2",
    "HUMIDITY",
    "PRESSURE",
    "LIGHT",
    "SOIL",
    "SOIL2",
    "SOILR",
    "SOILR2",
    "OXYGEN",
    "CO2",
    "WINDSPD",
    "WINDHDG",
    "RAINFALL",
    "MOTION",
    "VOLTAGE",
    "VOLTAGE2",
    "CURRENT",
    "CURRENT2",
    "IT",
    "LATITUDE",
    "LONGITUDE",
    "ALTITUDE",
    "HDOP",
    "LEVEL"
];
let measurements={}
msg.payload.forEach(e=>{
    if(measurements["fdrs_" +e.id]==undefined){
        measurements["fdrs_" + e.id]={};
    }
    measurements["fdrs_" + e.id]["field_" + e.type + "" + sensorTypes[e.type]]=e.data;
});
let batch=[]
Object.keys(measurements).forEach(k=>{
    batch.push({
        measurement: k,
        fields: (measurements[k] == null ? 0.0 : measurements[k])
    })
})
msg.payload =batch;
return msg;