getPost();

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(myJson => appendCard(myJson))
        .catch(err => console.error(err))
}

function appendCard(Json) {
    let content = document.querySelector('#content');

    Json.forEach(element => {
        console.log(element);

        content.insertAdjacentHTML('beforeend',
        `<div class="card m-2">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="assets/img/logo.png" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="card-title">Lorem Number: ${element.id}</h6>
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.body}</p>
                        <p class="card-text"><small class="text-muted">Posted by User: ${element.userId}</small></p>
                    </div>
                </div>
            </div>
        </div>`);
    });
}