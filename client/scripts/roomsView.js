// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    if (Messages._data !== null) {
      RoomsView.render();
    }

  },

  render: function() {
    // TODO: Render out the list of rooms.
    // Show list of rooms
    // on click, run renderRoom
    // get list of rooms from Rooms._data
    for (var i = 0; i < Rooms._data.length; i++) {
    // add each one to $select
      RoomsView.$select.append(`<option value="room">${Rooms._data[i]}</option>`);
    }

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // render messages which have the matching room id
    // clear chats
    // rerender chats such that only chats matching roomname are rendered
    $('#chats').html("");

    $('#rooms select').append(`<option value="room">${roomname}</option>`);
    if (Messages._data !== null) {
      for (var i = 0; i < Messages._data.length; i++) {
        if (Messages._data[i].roomname === roomname) {
          MessagesView.renderMessage(Messages._data[i]);
        }
      }
    }
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // empty the messages
    // call renderRoom with selected room name

  },

  handleClick: function() {
    // TODO: Handle the user clicking the "Add Room" button.
    Rooms.add();
  }

};
