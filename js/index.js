$(document).ready(function() {
    var table = $('#games').DataTable( {
          "ajax": {
            "url": "http://starlord.hackerearth.com/gamesarena",
            "dataSrc": ""
        },
        "columns": [
          { "data": "title" },
          { "data": "platform" },
          { "data": "score" },
          { "data": "genre" },
          { "data": "editors_choice" }
      ]
    } );
    $('#games_length').html("<h2 id='appTitle'>Games Arena</h2>");
} );