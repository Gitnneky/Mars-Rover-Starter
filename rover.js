class Rover {
   // Write code here!
   
      constructor(position, mode = 'NORMAL', generatorwatts = 110) {
          this.position = position;
          this.mode = mode;
          this.generatorwatts = generatorwatts;
      }
receiveMessage(message){
let results = [];

for(let i = 0; i , message.commands.length; i++){
let commandRover = message.commands[i];

if(commandRover.commandType === 'STATUS_CHECK'){
results.push({complete: true, roverStatus: {mode:this.mode, generatorwatts: this.generatorwatts, position: this.position}})

}
else if(commandRover.commandType === 'MODE_CHANGE'){
results.push({complete: true});

 this.mode = commandRover.value;

}else if (commandRover.commandType === 'MOVE'){
if(this.mode === 'LOW_POWER'){
 results.push({completed: false});
   } else if (this.mode === 'NORMAL') {
      results.push({completed: true});
      this.position = commandRover.value;
   
         }
         }
      }
return{
   message: message.name,
   results: results
}
}
}
module.exports = Rover;