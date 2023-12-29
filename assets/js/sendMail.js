
submit.onclick = e => {

    e.preventDefault();

    Email.send({
        SecureToken: "984b5335-048f-484a-95e8-3584fc750e32",
        To: 'biondar@hispanicfemalenetworksolutions.com',
        // To: 'romero.hipolito@gmail.com',
        From: "Geronimo.Perez4@Gmail.com",
        Subject: "Potential client",
        Body: `
        <h3>Hi Mrs. Lalondriz,</h3>
        
        <p>
        ${firstName.value} ${lastName.value} whose phone number and email are ${phone.value}, ${email.value}, and is interested in ${products.value} filled out a form on the Hispanic Female Network Solutions website on ${new Date().toDateString()} at ${new Date().toLocaleTimeString()} with the following message:
        </p>
        <p>
        ${help.value}
        </p>
        <p>
        Sincerely,
        </p>
        <p>
        Geronimo P.
        </p>`
    }).then(
        message => {
            alert(message);
            window.location.reload();
        });
};

