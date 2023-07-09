class MyHeader extends HTMLElement {

    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML=`
        <style>
        nav {
          display: block;
          align-items: center;
          justify-content: center;
          border-style: solid;
          background-color: rgb(210, 240, 214);

                }

            ul {
                margin: 0;
                padding:0 ;
                list-style-type: none;
                overflow: hidden;
            }    

            li {
                float: left;
            }

            

            .myelement {

                font-weight: 700;
                font-family: Palatino, Arial;
                margin: 0 0px;
                color: Blue;
                padding: 26px 26px;
                text-decoration: none;
                border-right: 1px solid #bbb;


              }
              
            nav  a:hover {
                background-color: rgb(100, 230, 200)
              }
            </style>
            <header>
                    <nav>
                        <ul>
                            <li>  <a href="index.html" class="myelement"> Home </a> </li>
                            <li> <a href="teaching.html"  class="myelement">Teaching </a> </li>
                            <li> <a href="publications.html"  class="myelement">Publications </a> </li>
                            <li> <a href="talks.html" class="myelement">Talks </a> </li>
                            <li> <a href="portfolio.html" class="myelement">Portfolio </a> </li>

                            <li> <a href="about.html"  class="myelement"> About </a> </li>

                        </ul>
                    </nav>
                </header>`
                ;

    }
}

customElements.define('my-header', MyHeader);

