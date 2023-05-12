module.exports = {
    async rewrites() {
      return [
        {
          source: '/about',
          destination: '/',
        },
      ];
    },
  };