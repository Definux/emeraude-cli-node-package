const yargs = require('yargs');
const { executeCliCommand } = require("./commandsFactory");
const readJson = require('read-package-json');
const path = require('path');
const packageRoot = path.join(__dirname, '../package.json');

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

        readJson(packageRoot, console.error, false, (error, data) => {
            console.log('EmPack Version: ' + data.version);
        });
        console.log('- - - - - - - - - - - - - - - - ');
        console.log('Emeraude (https://emeraude.dev/)');
    }
};