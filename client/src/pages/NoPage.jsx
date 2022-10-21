import React from 'react';

function NoPage() {
    return (
        <div className="error_main">
            <h1>Ups...</h1>

            <h3>Wygląda na to że ta strona nie istnieje!</h3>

            <p>Jeśli chcesz możesz:</p>
            <p><a href="/" className="go_back"><b>wrócić</b></a> na stronę główną,</p>
            <p>lub odświeżyć tą, na której się teraz znajdujesz.</p>

            <h1 className="error_code">404</h1>
        </div>
    );
}

export default NoPage;