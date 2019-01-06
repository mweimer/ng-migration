
module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                exclude: /node_modules/,
                use: [
                {
                    loader: 'ng-annotate-loader',
                    options: {
                        ngAnnotate: 'ng-annotate-patched'
                    }
                }]
            }
        ]
    }
};