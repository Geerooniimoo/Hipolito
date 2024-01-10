
submit.onclick = e => {

    e.preventDefault();

    Email.send({
        SecureToken: "32f50c8c-0771-45f1-960b-b265b14d42e1",
        To: 'Geronimo.Perez4@gmail.com',
        // To: 'biondar@hispanicfemalenetworksolutions.com',
        From: "hifenetllc@gmail.com",
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
        Hifenet-Bot
        </p>`
    }).then(
        message => {
            alert(message);
            window.location.reload();
        }

    );

};

