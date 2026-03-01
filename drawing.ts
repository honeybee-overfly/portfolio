interface Drawing {
    title: string;
    src: string;
    category?: string;
}

const drawings: Drawing[] = [
    {title: "Sunset", src: "images/drawing1.jpg"},
    {title: "Mountain", src: "images/drawing2.jpg"},
    {title: "Cityscape", src: "images/drawing3.jpg"},
];

const gallery = document.getElementById("gallery") as HTMLElement;

if (gallery) {
    drawings.forEach((drawing) => {
        const img = document.createElement("img");
        img.src = drawing.src;
        img.alt = drawing.title;
        img.title = drawing.title;
        gallery.appendChild(img);
    });
}
