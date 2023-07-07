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

            

            li a {

                font-weight: 700;
                margin: 0 0px;
                color: Purple;
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
                            <li>  <a href="index.html"> Home </a> </li>
                            <li> <a href="teaching.html" >Teaching </a> </li>
                            <li> <a href="publications.html" class="myelement">Publications </a> </li>
                            <li> <a href="talks.html" class="myelement">Talks </a> </li>

                            <li> <a href="https://www.dropbox.com/s/imwq0mluil2pmll/cv.pdf?dl=0" class="myelement">CV </a> </li>

                        </ul>
                    </nav>
                </header>`
                ;

    }
}

customElements.define('my-header', MyHeader);

