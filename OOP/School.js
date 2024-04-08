let school = {
    name: "Secunda Secondary School",
    established:"199",
    location: "Mpumalanga",
    learners: 100,

    displayinfo: function() {
        console.log(`The name of school is ${school.name} ${"\n"} located in ${school.location} established at ${school.established}`);
    },//End of function displayinfo
    
    hardData: function() {
        //Object iteration function
        console.log("The name os school is "+ school.nmae + "\n"
    + "located at " + school,location)
    },

    notationData: function(){
        console.log("The bane of school " + school['name'] + "\n"
    + " located at " + school['established'])
    }

}//End of Object

school.displayinfo()
school.hardData()
school.notationData()