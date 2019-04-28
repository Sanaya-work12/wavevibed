/** 
 * Authored by Shruti 
 * Webpack configurations for module bundling
 */

// Dependencies
const path = require('path');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.[name]-[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|scss|css)$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    quotes: ["error", "single"],
                    "comma-style": [2, "last"]
                }
            }
        ]
    }
};