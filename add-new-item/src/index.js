var node = document.createElement("li");
var item2 = document.createTextNode("Item 2");
node.appendChild(item2);
node.style.backgroundColor = "red";
document.getElementById("target").appendChild(node);
var node = document.createElement("li");
var item3 = document.createTextNode("Item 3");
node.appendChild(item3);
node.style.backgroundColor = "blue";
document.getElementById("target").appendChild(node);

const video = document.createElement("iframe");
video.width=560
video.height=315
video.src = "https://www.youtube.com/embed/LD2gm_xsz_k"
document.body.append(video);


