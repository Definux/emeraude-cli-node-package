import arg from 'arg';
import { executeCliCommand } from "./commandsFactory";

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

export function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    executeCliCommand(options);
    console.log('Emeraude (https://emeraude.dev/)');
}