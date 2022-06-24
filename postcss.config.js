module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: [
                'ie >= 8',
                'last 2 versions',
                '> 1%'
            ]
        })
    ]
}