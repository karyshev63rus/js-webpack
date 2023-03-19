const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[tj]sx$/i,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName:
                                    '[name]__[local]--[hash:base64:5]',
                                exportOnlyLocals: true,
                            },
                        },
                    },
                ],
            },
            // {
            //     test: /\.less$/i,
            //     use: ['style-loader', 'css-loader', 'less-loader'],
            // },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //         },
            //     ],
            // },
        ],
    },
    optimization: {
        minimize: false,
    },
};
