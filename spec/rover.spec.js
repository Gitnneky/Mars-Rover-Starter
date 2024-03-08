const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// // NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
// //       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
// 7 tests here!
it("constructor sets position and default values for mode and generatorWatts", function() {
  let rover = new Rover(2000);
  expect(rover.position).toEqual(2000);
  expect(rover.mode).toEqual('NORMAL');
  expect(rover.generatorwatts).toEqual(110);
});

// 8 test - response returned by receiveMessage contains the name of the message:
it("response returned by receiveMessage contains the name of the message", function(){
  let commands = [new Command('STATUS_CHECK'), new Command('MODE_CHANGE', 'LOW_POWER')]
let message = new Message('Testing message', commands);
let rover = new Rover(56577);
let response = rover.receiveMessage(message).message;
expect(response).toBe (message.name);
});

// // 9 test - response returned by receiveMessage includes two results if two commands are sent in the message:
it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message', commands);
let rover = new Rover(56577);
let response = rover.receiveMessage(message).results.length;
expect(response).toBe(commands.length);
});

// 10 test -responds correctly to the status check command
it("responds correctly to the status check command", function(){
let testPosition = new Rover(4567);
let commands =[new Command('STATUS_CHECK')];
let message = new Message('TA power', commands);
let response = testPosition.receiveMessage(message);
// console.log(response);
expect(response.results[0].completed).toEqual(true);
    expect(response.results[0].roverStatus.mode).toEqual('NORMAL');
    // expect(response.results[0].roverStatus.generatorwatts).toEqual(110);
    expect(response.results[0].roverStatus.position).toEqual(4567);
// expect(response.results[0]).toEqual({
//   completed: true, 
//   roverStatus: { mode: 'NORMAL', generatorWatts: 110, position: 4567 }
// });
});
// // 11 test - responds correctly to the mode change command:
// it("responds correctly to the mode change command", function(){
// let testPosition = new Rover(56579);
// let commads = [new Command('MODE_CHANGE', 'LOW_POWER')];
// let message = new message('Test message for MODE_CHANGE', commands);
// let response = testPosition.receiveMessage(message);
// expect(response.results[0].completed).toEqual(true);
// expect(response.mode[0].completed).toEqual('LOW_POWER');
// });

// // 12 test - responds with a false completed value when attempting to move in LOW_POWER mode:
// it("responds with a false completed value when attempting to move in LOWER_MODE", function(){
// let testPosition = new Rover(56570);
// let commands = [new Command('MODE_CHANGE', 'LOWER_CHANGE'), new command('MOVE', 1234)];
// let message = new message('Test message for move in LOW_POWER mode', commads);
// let response = testPosition.receiveMessage(message);
// expect(response.results[1].toEqual({completed:false}));
// expect(testPosition.position).toEqual(56570);
// });

// // 13 test - responds with the position for the move command:
// it("responds for the position for the move command", function(){
// let testPosition = new Rover(56571);
// let commands = [new command('MOVE', 12345)];
// let message = new message('Test message for position for the move command', commands);
// let response = testPosition.receiveMessage(message);
// expect(response.results[0]).toEqual({completed: true});
// expect(testPosition.position).toEqual(12345);
// });

});