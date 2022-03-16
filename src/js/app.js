const app ={

    urlPosts    :   "https://jsonplaceholder.typicode.com/posts",
    urlComments :   "https://jsonplaceholder.typicode.com/comments",
    urlUsers    :   "https://jsonplaceholder.typicode.com/users",

    userId      :   "",

    cargarPost : function(){
        /*const contenido = document.querySelector("#content");
        contenido.style.width = "100%";
        contenido.classList.add(["mx-auto"], ["mt-5"]);*/

        const contenido = $("#content");
        contenido.css("width","100%");
        contenido.addClass("mx-auto mt-5");
        let html = "";
        console.info(this.userId);
        let urlaux = "";
        if(this.userId !== ""){
            urlaux = "?userId=" + this.userId;
        }
        console.info(urlaux);
        fetch(this.urlPosts+urlaux)
            .then( response => response.json())
            .then( posts => {
                for(let post of posts){
                    html += `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${ post.title }</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Autor | Fecha</h6>
                            <p class="card-text">${ post.body }</p>
                            <div class="card-footer" text-muted>
                                <button type="button" class="btn btn-link" id="btn-ver-com${ post.id }" onclick="app.cargarComent
                                (${ post.id })">Ver comentarios<i class="bi bi-caret-down-fill"></i></button>

                                <button type="button" class="btn btn-link d-md-none" id="btn-cer-com${ post.id }"
                                onclick="app.cerrarComent(${ post.id })">
                                    Cerrar Comentarios<i class="bi bi-caret-up-fill"></i>
                                </button>

                                <div class="spinner-border text-primary d-md-none float-end" id="cargando${post.id }"
                                role="status">
                                    <span class="visually-hidden">Cargando...</span>
                                </div>


                                <div class="card d-md-none" id="card-com${ post.id }">
                                    <ul class="list-group list-group-flush" id="comments${ post.id }">
                                
                                    </ul>
                                </div>
                            </div>
                        </div>
                  </div>
                    `
                }
                //contenido.innerHTML = html;
                contenido.html(html);
            } ).catch(err => console.error("!!Error :" + err));
    },
    cargarUsuarios : function () {
        const usuarios = $("#autores");
        let html = "";
        usuarios.html(html);
        fetch(this.urlUsers)
            .then ( response => response.json() )
            .then ( users => {
                for(let user of users){
                    html += `
                    <button type="button" 
                    class="list-group-item list-group-item-action" aria-current="true" 
                    id="up ${ user.id }" onclick="app.userPosts(${ user.id })">${ user.name }<br>
                    <small>${ user.email }</small></button>
                    `;
                }
                usuarios.html(html);
            }).catch(err => console.error("!!Error :" + err));
    },
    userPosts : function(uid){
        $("#up" + this.userId).removeClass("active");
        this.userId = uid;
        $("#up" + uid).addClass("active");
        this.cargarPost();
    },
    cargarComent : function(pid){
        let html = "";
        const listaCom = $("#comments"+pid);
        $("#cargando"+pid).toggleClass("d-md-none", false);

        console.log(this.urlComments+"?postId="+pid)
        fetch(this.urlComments+"?postId="+pid)
            .then( response => response.json())
            .then( comentarios => {
                for( let c of comentarios ){
                    html+= `
                                <li class="list-group-item">
                                    De: <b>${ c.email }</b><br><b>${ c.body }</b>
                                </li>
                    `;
                }
                listaCom.html(html);
                $("#card-com"+pid).toggleClass("d-md-none",false);
                $("#btn-cer-com"+pid).toggleClass("d-md-none",false);
                $("#btn-ver-com"+pid).toggleClass("d-md-none",true);
            })
            .catch( err => console.error(err))
            .finally( () => {
                $("#cargando"+pid).toggleClass("d-md-none", true);
            });
    },
    cerrarComent : function(pid){
        const listaCom = $("#comments"+pid);
        listaCom.html("");
        $("#card-com"+pid).toggleClass("d-md-none",true);
        $("#btn-cer-com"+pid).toggleClass("d-md-none",true);
        $("#btn-ver-com"+pid).toggleClass("d-md-none",false);
    },
}


window.onload = function() {
    app.cargarPost();
    app.cargarUsuarios();
}