// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  // loop through messages._data and extract rooms
  addRooms: function (data) {
    for (var i = 0; i < data.length; i++) {
      // check if rommname is already in _data
      if (!Rooms._data.includes(data[i].roomname)) {
        // if not, add roomname to _data
        Rooms._data.push(data[i].roomname);
      }
    }
  }

};