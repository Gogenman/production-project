import { BuildOptions } from "./types/config"
import {Configuration as DevServerConf} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConf {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}