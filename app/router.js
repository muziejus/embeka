import EmberRouter from "@ember/routing/router";
import config from "emb-line/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("items");
  this.route("site");
  this.route("collections");
  this.route("elements");
  this.route("element-sets");
  this.route("tags");
});
