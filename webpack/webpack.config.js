const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = (environmentVar) => {
    const { env } = environmentVar
    const envConfig = require(`./webpack.${env}.js`)
    return merge(commonConfig, envConfig)
}
