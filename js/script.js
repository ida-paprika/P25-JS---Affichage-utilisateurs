fetch("https://reqres.in/api/users").then(response => response.json()).then(objetJson => {
    let listUser = objetJson.data;
    const MAIN = document.querySelector('main');
    let cards = "";

    for (user of listUser) {
        cards += `<div class="col">
                    <div class="card h-100" style="width: 15rem;">
                      <img src="${user.avatar}" class="card-img-top" alt="">
                      <div class="card-body">
                        <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                        <p class="card-text">Email : ${user.email}</p>
                      </div>
                    </div>
                  </div>`;
    }
    MAIN.innerHTML += '<div class="row row-cols-2 row-cols-lg-4 g-4">'+ cards +'</div>';
});


