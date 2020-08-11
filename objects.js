var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
 playlist["My Bloody Valentine"] = "songTitle";
 playlist["Phil Ochs"] = "songTitle";
 playlist["Slowdive"] = "songTitle";
}

function removeFromPlaylist(playlist, artistName) {
playlist["artistName"] = "My Bloody Valentine";
playlist["artistName"] = "Phil Ochs";
playlist["artistName"] = "Slowdive";
delete playlist.artistName;
}