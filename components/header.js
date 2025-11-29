class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav { background: rgba(255,255,255,0.08); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
                    border-bottom: 1px solid rgba(255,255,255,0.2); font-family: 'Inter', sans-serif; position: sticky; top: 0; z-index:50; }
                .container { max-width:1200px; margin:0 auto; padding:1rem 1.5rem; display:flex; justify-content:space-between; align-items:center; }
                .logo { font-size:1.75rem; font-weight:700; color:#fff; text-shadow:0 0 5px rgba(255,255,255,0.3); text-decoration:none; }
                .nav-links { display:none; gap:2rem; }
                .nav-link { color:rgba(255,255,255,0.8); text-decoration:none; transition:all 0.3s ease; }
                .nav-link:hover { color:#fff; text-shadow:0 0 8px rgba(255,255,255,0.5); }
                .menu-button { background:none; border:none; color:rgba(255,255,255,0.8); cursor:pointer; font-size:1.5rem; }
                @media (min-width:768px){ .nav-links{display:flex;} .menu-button{display:none;} }
            </style>
            <nav>
                <div class="container">
                    <a href="/" class="logo">ChromaChameleon</a>
                    <div class="nav-links">
                        <a href="#" class="nav-link">Features</a>
                        <a href="#" class="nav-link">Pricing</a>
                        <a href="#" class="nav-link">Docs</a>
                        <a href="#" class="nav-link">About</a>
                    </div>
                    <button class="menu-button">&#9776;</button>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-header', CustomHeader);
