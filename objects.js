var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
 playlist["My Bloody Valentine"] = "songTitle";
 playlist["Phil Ochs"] = "songTitle";
 playlist["Slowdive"] = "songTitle";
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist["My Bloody Valentine"];
  delete playlist["Phil Ochs"];
  delete playlist["Slowdive"];
  playlist;
}