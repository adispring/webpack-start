function HelloWorldPlugin(options) {
  // Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = (compiler) => {
  compiler.plugin('done', () => {
    console.log('Hello World!');
  });
};

module.exports = HelloWorldPlugin;
