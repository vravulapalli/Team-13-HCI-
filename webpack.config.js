const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.tsx" // Entry point of your application
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/, // Updated to include JS and JSX
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: { noEmit: false },
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader", // Injects styles into the DOM using multiple <style></style>
                    "css-loader"    // Interprets @import and url() like import/require() and will resolve them
                ]
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "../manifest.json" }, // Copying the manifest file to the dist directory
                { from: "contentScript.js", to: "../js/contentScript.js" }, // Copying the manifest file to the dist directory
                { from: "background.js", to: "../background.js" }, // Copying the manifest file to the dist directory

            ],
        }),
        ...getHtmlPlugins(["index"]), // Function to generate HTML files for chunks
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"], // Resolve these file types
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js",
    },
};

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HTMLPlugin({
        title: "Dark Pattern Finder", // Title of the HTML document
        filename: `${chunk}.html`, // Output HTML file name
        chunks: [chunk], // Inject chunks into HTML
    }));
}
