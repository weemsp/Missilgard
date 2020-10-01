const CC_BY_3 = "Creative Commons Attribution 3.0 License";
const CC_BY_4 = "Creative Commons Attribution 4.0 International License";

const SONG_LIST = [
	{name:"Flap 2", intensity:1,
		by:"PeriTune", yt:"RF79ViqrtMc", site:"https://peritune.com/flap2/", siten:"PeriTune.com", sc:"sei_peridot/flap2", license:CC_BY_4},
	{name:"Seahorse Dreams", intensity:3/4, kong:1, coolmath:1, armor:1,
		by:"Kubbi", yt:"DLvrDRRaftQ", site:"https://kubbimusic.com/track/seahorse-dreams", siten:"KubbiMusic.com", sc:"kubbi/seahorse-dreams", ng:538406},
	{name:"Irregular", intensity:1,
		by:"PeriTune", yt:"bvgXS3sukT4", site:"https://peritune.com/blog/2020/02/28/irregular/", siten:"PeriTune.com", sc:"sei_peridot/irregular", license:CC_BY_4},
	{name:"Numina", intensity:1,
		by:"PeriTune", yt:"xKfHxznQ36I"},
	{name:"Gothic Dark", intensity:1,
		by:"PeriTune", yt:"brZWB8cdBDs"},
	
]

var SONG_HASH = {};
SONG_LIST.forEach(function(sing, dex) {
	sing.description = "\"" + sing.name + "\" by " + sing.by + ". Click to listen.";
	if (!sing.iname)
		sing.iname = ((sing.fname || sing.name) + "-" + sing.by).replace(/\s/g, "");
	sing.src = "src/Audio/Songs/" + sing.iname + ".mp3";
	SONG_HASH[sing.iname] = sing;
	SONG_HASH[sing.name + " - " + sing.by] = sing;
	SONG_HASH[sing.name] = sing;
	sing.index = dex;
	sing.siteList = [];
	if (sing.site)
		sing.siteList.push({name:sing.siten, href:sing.site});
	if (sing.yt)
		sing.siteList.push({name:"YouTube", href:"https://www.youtube.com/watch?v="+sing.yt});
	if (sing.sc)
		sing.siteList.push({name:"SoundCloud", href:"https://soundcloud.com/"+sing.sc});
	if (sing.ng)
		sing.siteList.push({name:"Newgrounds", href:"https://www.newgrounds.com/audio/listen/"+sing.ng});
	if (sing.spot)
		sing.siteList.push({name:"Spotify", href:"https://open.spotify.com/album/"+sing.spot});
	if (sing.pat)
		sing.siteList.push({name:"Patreon", href:"https://www.patreon.com/"+sing.pat});
});

function loadFavSongs() {
	var loaded = localStorage.getItem("FavSongs");
	if (loaded) {
		var favs = JSON.parse(loaded);
		SONG_LIST.forEach(sing => sing.fav = favs[sing.iname]);
	}
}

function toggleFavSong(sing) {
	if (sing) {
		sing.fav = !sing.fav;
		var favs;
		var loaded = localStorage.getItem("FavSongs");
		if (favs) {
			favs = JSON.parse(loaded);
			favs[sing.iname] = sing.fav;
		} else {
			favs = {};
			SONG_LIST.forEach(sang => favs[sang.iname] = sang.fav);
		}
		localStorage.setItem("FavSongs", JSON.stringify(favs));
	}
}

