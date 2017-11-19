const path = require("path");
const Utility = require("./util/Utility");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const CachePlugin = require("webpack/lib/CachePlugin");

const sourcePath = path.resolve(__dirname, './../src');

var env = null;
for (var i = 0; i < process.argv.length; i++) {
    if (process.argv[i].startsWith("--env")) {
        env = process.argv[i].split("=")[1];
    }
}
if (!env) {
    env = "production";
}
console.log(env);


const paths = {
    root: Utility.projectDir,
    app: path.join(Utility.projectDir, "/src"),
    build: path.join(Utility.projectDir, "/build"),
    test: path.join(Utility.projectDir, "__test__"),
    lib: null,
    node_modules: path.join(Utility.projectDir, "/node_modules")
};

const babelOptions = {
    presets: [
        "react",
        "es2015",
        "stage-0"
    ]
};




module.exports = {
    context: path.resolve(__dirname, './../src'),
    entry: {
        app: "./index.js",
    },
    output: {
        path: path.resolve(Utility.projectDir, 'build'),
        filename: '[name].bundle.js',
    },
    resolve: {
        /**
         * @link https://webpack.github.io/docs/configuration.html#resolve-root
         * The directory (absolute path) that contains your modules.
         * May also be an array of directories. This setting should be used to add individual directories to the search path.
         * It must be an absolute path! Don’t pass something like ./app/modules.
         */
        modules: ["node_modules"],
        /**
         * @link https://webpack.github.io/docs/configuration.html#resolve-extensions
         * An array of extensions that should be used to resolve modules.
         * For example, in order to discover react jsx files, your array should contain the string ".jsx".
         */
        extensions: [".jsx", ".js", ".json"],
        /**
         * @link https://webpack.github.io/docs/configuration.html#resolve-modulesdirectories
         * An array of directory names to be resolved to the current directory as well as its ancestors, and searched for modules.
         * This functions similarly to how node finds “node_modules” directories.
         * For example, if the value is ["mydir"], webpack will look in “./mydir”, “../mydir”, “../../mydir”, etc.
         */
        enforceExtension: false
    },
    output: {
        path: path.resolve(Utility.projectDir, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                /**
                 * @link https://github.com/webpack/file-loader
                 * npm install file-loader --save-dev
                 */
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: "file-loader",
                include: /fonts/
            },
            {
                /**
                 * @link https://github.com/webpack/json-loader
                 * npm install json-loader --save-dev
                 */
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(Utility.projectDir, 'static'),
                to: './'
            },
        ]),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(env)
            }
        })
    ]
};