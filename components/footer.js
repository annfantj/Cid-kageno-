class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: rgba(255,255,255,0.08);
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    border-top: 1px solid rgba(255,255,255,0.2);
                    color: white;
                    padding: 3rem 1.5rem;
                    font-family: 'Inter', sans-serif;
                    position: relative;
                    overflow: hidden;
                    border-radius: 16px;
                }

                footer::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    border-radius: inherit;
                    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), rgba(255,255,255,0) 70%);
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                    z-index: 2;
                }

                footer:hover::before {
                    opacity: 0.6;
                }

                h4 { font-weight: 600; margin-bottom: 1rem; }
                .footer-link { color: rgba(255,255,255,0.7); text-decoration: none; transition: all 0.3s ease; }
                .footer-link:hover { color: #fff; text-shadow: 0 0 5px rgba(255,255,255,0.3); }

                .grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
                @media(min-width:768px){ .grid{ grid-template-columns: repeat(4,1fr); } }

                .footer-bottom {
                    margin-top: 3rem;
                    border-top: 1px solid rgba(255,255,255,0.2);
                    padding-top: 2rem;
                    text-align: center;
                    color: rgba(255,255,255,0.6);
                    font-size: 0.875rem;
                }
            </style>

            <footer>
                <div class="grid">
                    <div>
                        <h4>ChromaChameleon</h4>
                        <p>The ultimate solution for all your needs.</p>
                    </div>
                    <div>
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#" class="footer-link">Features</a></li>
                            <li><a href="#" class="footer-link">Pricing</a></li>
                            <li><a href="#" class="footer-link">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#" class="footer-link">About</a></li>
                            <li><a href="#" class="footer-link">Blog</a></li>
                            <li><a href="#" class="footer-link">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#" class="footer-link">Privacy</a></li>
                            <li><a href="#" class="footer-link">Terms</a></li>
                            <li><a href="#" class="footer-link">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-bottom">
                    © ${new Date().getFullYear()} ChromaChameleon. All rights reserved.
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
