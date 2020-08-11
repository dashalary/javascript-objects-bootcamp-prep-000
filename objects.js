var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
 playlist["My Bloody Valentine"] = "songTitle";
 playlist["Phil Ochs"] = "songTitle";
 playlist["Slowdive"] = "songTitle";
}

function removeFromPlaylist(playlist, artistName) {
artistName = "Slowdive";
artistName = "My Bloody Valentine";
artistName = "Phil Ochs";
delete playlist.artistName;
}