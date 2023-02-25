const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildPath = './build/';

module.exports = {
    entry: {
        main: './src/js/app.js',
        work: './src/js/work.js'
    },
    output: {
        path: path.join(__dirname, buildPath),
        filename: '[name].[hash].js',
        publicPath: `/${pkg.repository}/`,
        // assetModuleFilename: './src/images/[name][ext][query]'
    },
    target: 'web',
    devtool: 'source-map',
    stats: {
        warnings: false
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
            },
            // {
            //     test: /\.html$/,
            //     exclude: [path.resolve(__dirname, './node_modules/'), path.resolve(__dirname, './src/html/')],
            //     // exclude: [/node_modules/, require.resolve('./index.html')],
            //     use: {
            //         loader: 'file-loader',
            //         // query: {
            //         //     name: '[name].[ext]'
            //         // },
            //     }
            // },
            // {
            //     test: /\.html$/,
            //     use: ['html-loader'],
            //     exclude: /WebpackTemplates/,
            //     // exclude: path.resolve(__dirname, './src/html/'),
            // },
            {
                test: /\.css$/,
                /** or /\.css$/i if you aren't using sass */
                use: [{
                        loader: 'style-loader',
                        options: {
                            insert: 'head', // insert style tag inside of <head>
                            injectType: 'singletonStyleTag' // this is for wrap all your style in just one style tag
                        },
                    },
                    "css-loader",
                ],
            },
            // {
            //     test: /\.css$/i,
            //     use: ["style-loader", "css-loader"],
            //     exclude: path.resolve(__dirname, './node_modules/'),
            // },
            {
                test: /\.(jpe?g|png|gif|svg|tga|gltf|babylon|mtl|pcb|pcd|prwm|obj|mat|mp3|ogg)$/i,
                use: 'file-loader',
                exclude: [
                    path.resolve(__dirname, './node_modules/'), path.resolve(__dirname, './src/images/')
                ],

            },
            {
                // load html images
                test: /\.(jpe?g|png|gif|svg)$/i,
                // use: 'file-loader',
                // options: {
                //     outputPath: '../images/' // Chage this like 'public/images' or any other relative path to the root
                // },
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: './src/images/[name].[ext]',
                        // outputPath: '../images/'
                    }
                }],
                // type: 'asset/resource',
                exclude: path.resolve(__dirname, './src/components/'),
                // generator: {
                //     filename: './src/images/[hash][ext]'
                //         // filename: '[contenthash]'
                // }
            },
            {
                test: /\.(vert|frag|glsl|shader|txt)$/i,
                use: 'raw-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
            },
            {
                type: 'javascript/auto',
                test: /\.(json)/,
                exclude: path.resolve(__dirname, './node_modules/'),
                use: [{
                    loader: 'file-loader',
                }, ],
            },
            {
                test: /\.hdr$/,
                use: "url-loader",
                exclude: path.resolve(__dirname, './node_modules/'),
            }
        ],
    },
    resolve: {
        alias: {
            lights$: path.resolve(__dirname, 'src/components/lights'),
            objects$: path.resolve(__dirname, 'src/components/objects'),
            scenes$: path.resolve(__dirname, 'src/components/scenes'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            // filename: "",
            inject: true,
            title: pkg.title,
            template: "./src/html/index.html",
            // css: "./src/css/home.css",
            favicon: './src/favicon.png',
            chunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            // base: '/work.html',
            // inject: body,
            inject: true,
            filename: "work",
            title: "work",
            template: "./src/html/work.html",
            // templateParameters: {
            //     version: process.env.CI_COMMIT_ID || 'unknown-version',
            //     publicPath: ASSET_PATH,
            //     hsScriptUrl: HS_SCRIPT_URL
            // },
            // css: "./src/css/work.css",
            // js: "./src/js/work.js",
            favicon: 'src/favicon.png',
            // excludeChunks: ["main"],
            chunks: ["work"]
        }),
    ],
};