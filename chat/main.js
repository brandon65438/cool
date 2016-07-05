  var config = {
    apiKey: "AIzaSyAYU9awGUaTc1XOIaUCUjJU9BBYoEmpJo4",
    authDomain: "chat-app-1abb0.firebaseapp.com",
    databaseURL: "https://chat-app-1abb0.firebaseio.com",
    storageBucket: "chat-app-1abb0.appspot.com",
  };
  firebase.initializeApp(config);

  var chatData = firebase.database().ref();

  function pushMessage(event) {
      if (event.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          chatData.push({ name: name,text: text });
          $('#messageInput').val('');
      }
  }

  chatData.on("child_added", showMessage);

  function showMessage(msg) {
      var message = msg.val();
      var messageSender = message.name;
      var messageContent = message.text;

      var messageEl = $("<div/>").addClass("message");
      var senderEl = $("<span/>").text(messageSender + ": ");
      var contentEl = $("<span/>").text(messageContent);

      messageEl.append(senderEl);
      messageEl.append(contentEl);
      $('#messages').append(messageEl);
  }
   $('#messageInput').keypress(pushMessage);