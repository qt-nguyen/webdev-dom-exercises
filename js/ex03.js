let checkboxes = document.querySelectorAll('input[type="checkbox"]');

let btn_check_all = document.getElementById('check-all');
let btn_uncheck_all = document.getElementById('uncheck-all');

btn_check_all.addEventListener('click', function()
{
    for (let i = 0; i < checkboxes.length; i++)
    {
        checkboxes[i].checked = true;
    }
});

btn_uncheck_all.addEventListener('click', function()
{
    for (let i = 0; i < checkboxes.length; i++)
    {
        checkboxes[i].checked = false;
    }
});
