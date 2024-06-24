/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: process.env.NODE_ENV !== "development" ? "build/next" : ".next",
  webpack: (config, { isServer }) => {
    config.resolve.symlinks = false;

    if (!isServer) {
      // Ignorer les modules pour le bundle client si nécessaire
      return config;
    }

    config.watchOptions = {
      poll: 1000, // Utiliser le polling toutes les 1000ms (1 seconde)
    };

    config.plugins.push(new FilterWarningsPlugin(/Critical dependency: the request of a dependency is an expression/));

    // Ignorer les modules spécifiques côté serveur
    config.externals.push("react-native-sqlite-storage", "@sap/hana-client/extension/Stream", "mysql");

    return config;
  },
};

export default nextConfig;

class FilterWarningsPlugin {
  constructor(warningMessageRegExp) {
    this.warningMessageRegExp = warningMessageRegExp;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap("FilterWarningsPlugin", (compilation) => {
      compilation.warnings = compilation.warnings.filter((warning) => !this.warningMessageRegExp.test(warning.message));
    });
  }
}
