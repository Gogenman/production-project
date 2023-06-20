import webpack from "webpack";


export function buildResolves(): webpack.ResolveOptions {
    return { // отвечает за импорты без расширений
        extensions: ['.tsx', '.ts', '.js'], 
    }
}