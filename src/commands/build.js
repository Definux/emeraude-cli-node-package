import { exec } from "child_process";
import path from 'path';
import webpack from 'webpack';
import fs from 'fs';

export class BuildCommand {

    constructor(options) {
        this.options = options;
    }

    executeCommand() {
        let configPath = path.join(process.cwd(), 'emeraude.config.js');

        console.log('Reading configuration..');

        try {
            if (fs.existsSync(configPath)) {
            }
        } catch(err) {
            console.log(err);
            return;
        }

        if (!this.options.dev) {
            process.env.NODE_ENV = 'production';
        }

        let emConfig = require(configPath)();
        console.log('Configuration has been read.');
        console.log('Start building application bundles.. ' + (this.options.dev ? 'in development' : 'in production. Building may take a bit longer to finish.'));

        webpack(emConfig, (error, stats) => {
           if (error) {
               console.log(error);
           }
           if (stats.hasErrors()) {
               console.log(new Error(stats.compilation.errors.join('\n')));
           }
        });
    }
}