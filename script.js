let cartesGeneral = document.querySelector('.cartesGeneral');


async function afficherFilms () {
    const reponse = await fetch ("https://api.npoint.io/b63dccb6f75ee23dcf45");
        const filmographie = await reponse.json();
        filmographie.films.map ((film) => {
            let carte = document.createElement ('div');
            cartesGeneral.appendChild (carte);
            carte.className = "carte";
        
            
            //appeler l'image
            let affiche = document.createElement('img');
            affiche.src = film.miniature;
            carte.appendChild(affiche);
            
            //appeler le titre//
            let title = document.createElement('h2');
            title.innerText = film.titre;
            carte.appendChild(title);

            //appeler la duree//
            let duree = document.createElement('p');
            duree.innerText = film.duree;
            carte.appendChild(duree);

            //appeler l' année sortie//
            let annee = document.createElement('p');
            annee.innerText = film.annee_de_sortie;
            carte.appendChild(annee);

            //appeler le realisateur//
            let realisateur = document.createElement('p');
            realisateur.innerText = film.realisateur;
            carte.appendChild(realisateur);

            //appeler le synopsis//
            let synopsis = document.createElement('p');
            synopsis.innerText = film.synopsis;
            carte.appendChild(synopsis);
        })
}

afficherFilms ();


