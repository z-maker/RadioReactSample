
export const getStreamData = (url) => {
    return new Promise((resolve, reject)=>{

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = () => {
            if(xhr.status === 200){
                resolve (JSON.parse(xhr.responseText))
            }else{
                reject(Error(xhr.statusText))
            }
        };
        xhr.onerror = (error) => reject(error);
        xhr.send();

    })
}

export const getAlbumArtData = (text) => {

    var songData = text.split('-');
    var artist = formatArtist(songData[0]);
    var title = formatTitle(songData[1]);

    var url = "https://itunes.apple.com/search?term==" + artist + "-" + title + "&media=music&limit=1";

    return new Promise((resolve, reject)=>{

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = () => {
            if(xhr.status === 200){
                resolve (JSON.parse(xhr.responseText))
            }else{
                reject(Error(xhr.statusText))
            }
        };
        xhr.onerror = (error) => reject(error);
        xhr.send();

    })

}

function formatArtist(artist) {
    artist = artist.toLowerCase();
    artist = artist.trim(artist);
    if (artist.includes("&")) {
        artist = artist.substr(0, artist.indexOf(' &'));
    }
    else if (artist.includes("feat")) {
        artist = artist.substr(0, artist.indexOf(' feat'));
    } else if (artist.includes("ft.")) {
        artist = artist.substr(0, artist.indexOf(' ft.'));
    }

    return artist;
}

function formatTitle(title) {
    title = title.toLowerCase();
    title = title.trim(title);
    if (title.includes("&")) {
        title = title.replace('&', 'and');
    }
    else if (title.includes("(")) {
        title = title.substr(0, title.indexOf(' ('));
    } else if (title.includes("ft")) {
        title = title.substr(0, title.indexOf(' ft'));
    }

    return title;
}