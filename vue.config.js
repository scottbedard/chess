module.exports = {
    chainWebpack(config) {
        // autofix eslint errors
        config.module
            .rule('eslint')
            .use('eslint-loader')
            .options({
                fix: true,
            });
    },
};
