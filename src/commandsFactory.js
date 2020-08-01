const { BuildCommand } = require('./commands/build');

class CommandsFactory {
    constructor(options) {
        if(options.template === "build") { return new BuildCommand(options); }
    }
}

module.exports = {
    executeCliCommand: function (options) {
        if (typeof(options.template) !== 'undefined') {
            let command = new CommandsFactory(options);
            command.executeCommand();
        }
        else {
            console.log('The CLI command is not defined.');
        }
    }
};

