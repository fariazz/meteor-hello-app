Template.taskForm.events({
  "submit #taskForm": function(event, template){
    event.preventDefault();
    var text = template.find('#description').value;

    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.insert({
      text: text,
      createdAt: new Date()
    });

    Router.go('/');
  }
});
