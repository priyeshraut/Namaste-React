module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }]
  ],
};


// babel preset-react is helping our testing library to convert the JSX code to HTML so that it can read properly
