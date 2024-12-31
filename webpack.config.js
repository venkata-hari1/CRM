const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      // Add other core modules as needed
    },
  },
  // Other webpack configurations go here
};
