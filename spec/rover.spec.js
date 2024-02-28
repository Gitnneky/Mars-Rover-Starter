const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
beforeEach(() => {
rover = new Rover(98382);
commands = [ new Command('STATUS_CHECK'),
new Command('MODE_CHANGE', 'NORMAL')];
message = new Message('Test message with two commands', commands);
});

it("should set position based on constructor argument", function() {
expect(rover.position).toEqual(98382);
});

it("should set default mode to 'NORMAL' and process commands correctly", function()
{
  let response = rover.recieveMessages(message);
  expect(rover.mode).toEqual('NORMAL');
  expect(response.results[0].roverStatus.mode).toEqual('NORMAL');
});

it("should set defualt mode to 'NORMAL' and generatorWatts to 110", function()
{let response = rover.recieveMessages(message);
  expect(rover.mode).toEqual('NORMAL');
});
  // 7 tests here!

});
