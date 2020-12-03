let search = document.querySelector('#search');

search.addEventListener('click', validateInput);

function validateInput()
{
    let loremNumber = document.querySelector('#loremNumber').value;

    if(loremNumber > 0 && loremNumber <= 100)
    {
        searchLorem(loremNumber);
    }
    else
    {
        document.querySelector('#loremNumber').value = "";
    }
}

function searchLorem(number) {
    window.location.href = `/one.html?number=${number}`;
}