var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
 playlist["My Bloody Valentine"] = "songTitle";
 playlist["Phil Ochs"] = "songTitle";
 playlist["Slowdive"] = "songTitle";
}

function removeFromPlaylist(playlist, artistName) {
var artistName = "My Bloody Valentine", "Phil Ochs", "Slowdive";
delete playlist.artistName;

}