const mix = require("laravel-mix");
const webpack = require("webpack");
const path = require("path");

class NovaExtension {
  name() {
    return "nova-extension";
  }

  register(name) {
    this.name = name;
  }

  webpackPlugins() {}

  webpackConfig(webpackConfig) {
    webpackConfig.externals = {
      vue: "Vue",
      "laravel-nova": "LaravelNova",
      "laravel-nova-ui": "LaravelNovaUi",
    };
    webpackConfig.output = {
      uniqueName: this.name,
    };
  }
}

mix.extend("nova", new NovaExtension());
