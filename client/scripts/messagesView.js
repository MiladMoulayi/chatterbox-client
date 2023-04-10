// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    if (Messages._data !== null) {
      MessagesView.render();
    }
  },

  render: function() {
    // TODO: Render _all_ the messages.
    for (var i = 0; i < Messages._data.length; i++) {
      MessagesView.renderMessage(Messages._data[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    $('#chats').append(MessageView.render(message));
  },

  // $('.chat').on('click', '.username', handleClick);

  handleClick: function(username) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // on click, update Friends._data to include username of message author



    Friends.toggleStatus(username);
    console.log(Friends._data);


  }

};