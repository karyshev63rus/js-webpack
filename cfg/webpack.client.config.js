const path = require('path');

module.exports = {
    resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] },
    entry: path.resolve(__dirname, '../src/client/client.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.[tj]sx?$/i,
                use: ['ts-loader'],
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName:
                                    '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    'less-loader',
                ],
            },
        ],
    },
};
