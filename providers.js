
//Third-Party Login Providers
module.exports = {
    "google-login": {
        "provider": "google",
        "module": "passport-google-oauth",
        "strategy": "OAuth2Strategy",
        "clientID": "394478082030-cvk1h8sv3k2ks5uouojged2beu6bjsei.apps.googleusercontent.com",
        "clientSecret": "mzew4pd1QxnMeRS4RqZbwdut",
        "callbackURL": "/auth/google/callback",
        "authPath": "/auth/google",
        "callbackPath": "/auth/google/callback",
        "successRedirect": "/auth/account",
        "failureRedirect": "/login",
        "scope": [
            "email",
            "profile"
        ],
        "failureFlash": true
    }
};