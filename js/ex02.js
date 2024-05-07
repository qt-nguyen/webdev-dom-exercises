let image_srcs = ["images/icon-1.png", "images/icon-2.png", "images/icon-3.png", "images/icon-4.png"];
let image_active_srcs = ["images/icon-1-active.png", "images/icon-2-active.png", "images/icon-3-active.png", "images/icon-4-active.png"];
let images = document.querySelectorAll('img');

for (let i = 0; i < images.length; i++)
{
    images[i].addEventListener('mouseover', function()
    {
        images[i].src = image_active_srcs[i];
    });

    images[i].addEventListener('mouseout', function()
    {
        images[i].src = image_srcs[i];
    });
}