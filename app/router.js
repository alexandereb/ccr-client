import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ministeries');
  this.route('pastor');
  this.route('about');
  this.route('news');
  this.route('media');
  this.route('resources');
  this.route('retiro');
  this.route('contact');
});

export default Router;
