class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card__left');

        const autor = document.createElement('span');
        autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous');

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link');

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card__right');

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('photo') || "./assets/img/default-img.png";
        newsImage.alt = 'Foto da notícia';

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
        .card {
            margin: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 60%;
            height: 12rem;
            -webkit-box-shadow: 13px 10px 40px 5px rgba(0,0,0,0.34);
            -moz-box-shadow: 13px 10px 40px 5px rgba(0,0,0,0.34);
            box-shadow: 13px 10px 40px 5px rgba(0,0,0,0.34);
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: .8rem;
        }
        
        .card__left > a {
            margin: .7rem 0;
            text-decoration: none;
            color: rgb(44, 44, 44);
            font-weight: 600;
            font-size: 2rem;
        }
        
        .card__left > p {
            color: rgb(88, 88, 88);
        }
        
        .card__left > span {
            color: rgb(88, 88, 88);
            font-weight: 500;
        }
        
        .card__right > img {
            height: 100%;
        }
        `;

        return style;
    }
}

customElements.define('card-news', Cardnews);