var drawings = [
    { title: "Sunset", src: "images/drawing1.jpg" },
    { title: "Mountain", src: "images/drawing2.jpg" },
    { title: "Cityscape", src: "images/drawing3.jpg" },
];
var gallery = document.getElementById("gallery");
if (gallery) {
    drawings.forEach(function (drawing) {
        var img = document.createElement("img");
        img.src = drawing.src;
        img.alt = drawing.title;
        img.title = drawing.title;
        gallery.appendChild(img);
    });
}
