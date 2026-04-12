const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'music'), 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading:', err);
        return;
    }

    let songs = data.map((val, key) => {
        return {
            id: key,
            title: val,
            url: './music/' + val,
            artist: "未知歌手",
            cover: "https://picsum.photos/seed/song1/300/300"
        }
    })

    let str = `const songs = ${JSON.stringify(songs)};`

    fs.writeFile(path.join(__dirname, 'songs.js'), str, (err) => { })
});