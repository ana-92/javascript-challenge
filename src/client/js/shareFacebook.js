

const shareFacebook = (d, id) => {
    let js;
    const fjs = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
        return;
    }

    js = d.createElement('script');
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
};

module.exports = { shareFacebook };