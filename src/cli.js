const arg = require('arg');
const { executeCliCommand } = require("./commandsFactory");

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
        {
            '--dev': Boolean,
            '--max-buffer': Number
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    return {
        template: args._[0],
        dev: args['--dev'] || false,
        maxBuffer: args['--max-buffer'] || 2000
    };
}

module.exports = {
    cli: function (args) {
        let options = parseArgumentsIntoOptions(args);
        executeCliCommand(options);
        console.log('Emeraude (https://emeraude.dev/)');
    }
};