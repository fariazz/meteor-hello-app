Template.listing.helpers({
  tasks: function () {
    return Tasks.find();
  }
});

Template.listing.events({
  "click .removeBtn": function () {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.remove(this._id);
    }
});
