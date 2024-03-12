
   // Write code here!
   class Rover {
   constructor(position) {
   this.position = position;
   this.mode = 'NORMAL';
    this.generatorwatts = 110;
         }




receiveMessage(message){
let results= [];

for(let i = 0; i< message.commands.length; i++){
let commandRover = message.commands[i];
// let result = {}
if(commandRover.commandType === 'STATUS_CHECK'){
results.push({completed: true, roverStatus: {mode:this.mode, generatorwatts: this.generatorwatts, position: this.position}})

}
// else if(message.commands[i].commandType === 'MODE_CHANGE'){
   else if(commandRover.commandType === 'MODE_CHANGE'){
      this.mode = commandRover.value;  
   // this.mode = message.commands[i].value;
   results.push({completed: true});

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