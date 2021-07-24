const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(library) {
       let id = '';
       let name = '';
       let trackCount = 0;
       for (const folder in library) {
              //console.log('the folder is: ', folder)
              if (folder === 'playlists') {
                     for (const subFolder in library['playlists']) {
                            trackCount = 0;
                            //console.log('the subfolder is: ', subFolder);
                            const keys = Object.keys(library['playlists'][subFolder])
                            id = subFolder; //correct!
                            //console.log('the id is: ', id)

                            for (let i = 0; i < keys.length; i++) {
                                   //console.log(keys[i], ': ', library['playlists'][subFolder][keys[i]])

                                   if (keys[i] === 'name') {
                                          // console.log('the name is: ', library['playlists'][subFolder][keys[i]]);
                                          name = library['playlists'][subFolder][keys[i]];
                                          //console.log('the name is: ', name);
                                   }
                                   if (keys[i] === 'tracks') {
                                          // console.log('some data', library['playlists'][subFolder][keys])
                                          // console.log('the current folder is: library / playlists /',subFolder,'/',keys[i]);
                                          // console.log('the tracks are: ', library['playlists'][subFolder][keys[i]]);
                                          for (const track of library['playlists'][subFolder][keys[i]]) {
                                                 //console.log(track)
                                                 trackCount++
                                                 //console.log(trackCount);
                                          }
                                   }
                            }
                            console.log(id,': ', name,' - ', trackCount, ' tracks')
                     }
              }
       }
}
// console.log(printPlaylists(library));


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(library) {
       let trackId = '';
       let trackName = '';
       let artist = '';

       for (const folder in library) {
              if (folder === 'tracks') {
                     for (const subFolder in library[folder]) {
                            //console.log(subFolder);
                            for (const song in library[folder][subFolder]){
                                   //console.log(song)
                                   if (song === 'id') {
                                          trackId = library[folder][subFolder][song];
                                          //console.log('the id is: ',trackId);
                                   } else if (song === 'name') {
                                          trackName = library[folder][subFolder][song];
                                          //console.log('the track name is: ',trackName);
                                   } else if (song === 'artist') {
                                          artist = library[folder][subFolder][song];
                                          //console.log('the artist is: ',artist);
                                   }
                                   //trackId = library[folder][subFolder][song];
                                   //console.log('the data in trackId is: ',trackId);
                            }
                            /*
                            I'm logging the output to get each string and dataset logged to the terminal.
                            If I need to return the data, I can push the song data into an object and then
                            return it to get an output with all the songs and their metadata displayed the
                            way I want it.
                            */
                            console.log(trackId,': ',trackName, ' by ',artist);
                     }
              }
       }
}
//console.log(printTracks(library));

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(library, playlistId) {
       let playlistNumber = '';
       let playlistName = '';
       let songId = '';
       let songName = '';
       let songArtist = '';
       let count = 0;
       let foundSong = {};
       let phraseArray = [];
       for (const folder in library) {
              if (folder === 'playlists') {
                     for (const subFolder in library[folder]) {
                            playlistNumber = subFolder;
                            if (subFolder === playlistId){
                                   for (const playlist in library[folder][subFolder]){
                                          playlistName = library[folder][subFolder]['name'];
                                         if (playlist === 'tracks') {
                                                songArray = library[folder][subFolder][playlist];
                                                for (let i = 0; i < songArray.length; i++) {
                                                       songId = library[folder][subFolder][playlist][i];
                                                       foundSong = findSong(library, songId);
                                                       songId = foundSong.id;
                                                       songName = foundSong.name
                                                       songArtist = foundSong.artist;
                                                       count++;
                                                       //console.log(foundSong);
                                                       //console.log('songs name is: ', songName);
                                                       phraseArray.push(`${songId}: ${songName}' by ${songArtist}`);
                                                 }
                                                 phrase1 = `${playlistNumber}: ${playlistName} - ${count} tracks`;
                                                 phraseArray.unshift(phrase1);
                                                 //console.log(phraseArray);
                                                 return phraseArray;
                                                 //console.log(songArray);
                                                 
                                         }

                                          //console.log(playlist);
                                   }
                            }
                            //console.log(subFolder);
                     }
              }
       }
}
// finds a song based on its track id (E.G. t01) and returns the song as an object
const findSong = function(library, trackId) {
       const foundSong = {};
       for (const folder in library) {
              if (folder === 'tracks') {
                     for (const subFolder in library[folder]) {
                            // console.log(subFolder);
                            // console.log('the sub folder is: ', subFolder);
                            if (subFolder === trackId) {
                                   // console.log('found It!')
                                   // console.log(library[folder][subFolder])
                                   for (const dataType in library[folder][subFolder]){
                                          // console.log(dataType)
                                          if (!foundSong[dataType]) {
                                                 foundSong[dataType] = library[folder][subFolder][dataType];
                                          }
                                   }
                                   //console.log('the found song is: ',trackId, ' - ', foundSong.name);
                                   
                                   return foundSong;
                            }
                     }
              }
       }
}

//console.log(findSong(library, 't01'));
//console.log(printPlaylist(library, 'p01'));

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(library, trackId, playlistId) {
       //let foundSong = findSong(library, trackId);
       //console.log(foundSong);
       for (const folder in library) {
              if (folder === 'playlists') {
                     for (const playlist in library[folder]) {
                            if (playlist === playlistId) {
                                   //console.log('the playlist is: ',playlist)
                                   //console.log(library[folder][playlist]);
                                   for (const dataSet in library[folder][playlist]) {
                                          if (dataSet === 'tracks') {
                                                 library[folder][playlist][dataSet].push(trackId);
                                                 //console.log('in the tracks array')
                                                 //console.log(library[folder][playlist][dataSet])
                                          }
                                          //console.log(dataSet);
                                   }
                            }
                     }
              }
       }

}

//console.log(addTrackToPlaylist(library, 't01', 'p01')) 
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
       let trackId = generateUid();
       let songCount = 1
       for (const track in library['tracks']) {
              //console.log(track);
              songCount++;
       }
       let songId = `t0${songCount}`
       if (!library['tracks'][songId]){
              //console.log('doesnt exist');
              library['tracks'][songId] = {id: trackId, name: name, artist: artist, album: album}
              //console.log('the new song is: ', library['tracks'][songId]);
       }
       //console.log(songCount);
       //console.log('new song id is: ', songId);
       //console.log(library['tracks'])
       //console.log('new track id is: ', trackId)
}
//console.log(addTrack('For Aisha', 'MEMBA', 'Stand Off'))

// adds a playlist to the library
const addPlaylist = function(name) {
       let count = 1;
       for (const list in library['playlists']) {
              //console.log(list);
              count++;
              let playlistId = `p0${count}`
              //console.log(count);
              //console.log(playlistId);
              //console.log(library['playlist'])
              if (!library['playlists'][playlistId]) {
                     library['playlists'][playlistId] = {name: name};
                     //console.log(library['playlists'][playlistId] = {name: name})
              }
       }
       //console.log(name);
       //console.log(library['playlists']);
       //if ()
}
//console.log(addPlaylist('Bumpin\''))

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}