var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
 playlist["My Bloody Valentine"] = "songTitle";
 playlist["Phil Ochs"] = "songTitle";
 playlist["Slowdive"] = "songTitle";
}

function removeFromPlaylist(playlist, artistName) {
playlist["My Bloody Valentine"] = "artistName";
playlist["Phil Ochs"] = "artistName";
playlist["Slowdive"] = "artistName";
delete playlist.artistName;
}