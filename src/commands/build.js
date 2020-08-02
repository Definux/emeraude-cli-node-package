const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

module.exports = class BuildCommand {

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

           if (stats) {
               console.log(stats);
           }
        });
    }
};