function CompilationInspectPlugin(options) {
  // Setup the plugin instance with options...
}

CompilationInspectPlugin.prototype.apply = (compiler) => {
  compiler.plugin('emit', (compilation, callback) => {
    console.log('Chunk:\n');
    compilation.chunks.forEach(chunk => {
      console.log(chunk.name);
      console.log('Module:\n');
      chunk.forEachModule(module => {
        /* console.log(module.name);*/
        console.log('filepath:\n');
        module.fileDependencies.forEach(filepath => {
          console.log(filepath);
        });
        console.log('filename:\n');
        chunk.files.forEach(filename => console.log(filename));
      });
    });
  });
};

module.exports = CompilationInspectPlugin;
