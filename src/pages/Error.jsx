import React from "react"

export default function Error() {
    return (
        <div className="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retournez sur la page d'accueil
            </a>
        </div>
    )
}