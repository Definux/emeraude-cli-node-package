const yargs = require('yargs');
const { executeCliCommand } = require("./commandsFactory");

function parseArgumentsIntoOptions(rawArgs) {
    const argv = yargs
        .command('build')
        .option('dev', {
            type: 'boolean',
            description: 'Build bundle in development mode'
        })
        .argv;

    return {
        template: argv._[0],
        dev: argv['dev'] || false,
    };
}

module.exports = {
    cli: function (args) {
        let options = parseArgumentsIntoOptions(args);
        executeCliCommand(options);
        console.log('- - - - - - - - - - - - - - - - ');
        console.log('Emeraude (https://emeraude.dev/)');
    }
};