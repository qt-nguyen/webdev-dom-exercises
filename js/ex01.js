const image = document.querySelector('img');
const image_src = image.src;
const image_active_src = "images/icon-1-active.png";

image.addEventListener('mouseover', function() 
{
    image.src = image_active_src;
});

image.addEventListener('mouseout', function()
{
    image.src = image_src;
});