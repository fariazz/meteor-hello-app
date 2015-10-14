Router.configure({
  layoutTemplate: 'applicationLayout'
});

Router.route('/', function () {
  this.render('listing');
});

Router.route('/taskForm');
