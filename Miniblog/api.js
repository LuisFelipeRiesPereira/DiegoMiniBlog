function jokeapi(url) {
    console.log("deu")
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function jokes(){
    let body = document.querySelector("body");
    div = document.createElement("div")


    description = document.createElement("p")
    postDate = document.createElement("p")
    profileName = document.createElement("p")
    profileThumbImage = document.createElement("img")
    thumbImage = document.createElement("img")
    thumbImageAltText = document.createElement("p")
    title = document.createElement("p")


    body.appendChild(div)
    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(postDate)
    div.appendChild(profileName)
    div.appendChild(thumbImageAltText)

}


function main(jokess){
    data = jokeapi("https://api-fake-blog.herokuapp.com/postagem/1")
    jokess = JSON.parse(data);
    console.log(jokess)
    jokes()
    title.innerHTML = jokess.title
    description.innerHTML = jokess.description
    postDate.innerHTML = jokess.postDate
    profileName.innerHTML = jokess.profileName
    thumbImageAltText.innerHTML = jokess.thumbImageAltText

}
main()