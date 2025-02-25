addEventListener("DOMContentLoaded", async function() {
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get('id')
    console.log(songID)

    const response  = await this.fetch("http://localhost:3000/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading =""
    heading+= '${song.title}'
    this.document.querySelectorAll("h1").innerHTML = heading

    let html = ""
    html += `
    <h3>Artist - ${song.artist}</h3>
    <p>Popularity - ${song.popularity}</p>
    <p>Release Date - ${song.releaseDate}</p>
`;

    document.querySelector("div").innerHTML = html

 })