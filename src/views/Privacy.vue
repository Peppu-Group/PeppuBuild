<template>
    <div class="background">

        <body id="iljx">
            <Headers />
            <section class="bdg-sect">
                <h1 class="heading">Privacy Policy
                </h1>
                <span id="ilg2">We take your privacy seriously. We do not share or sell your information with
                    anybody.</span>
            </section>
            <section class="p-content">
                <h1 class="head-content">Policy
                </h1>
                <span id="ilg2" class="light">This Privacy Policy describes Our policies and procedures on the collection,
                    use and
                    disclosure of Your information when You use the Service and tells You about Your privacy rights and how
                    the law protects You. We use Your Personal data to provide and improve the Service. By using the
                    Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                    <br /><br /><br />Peppubuild ("us", "we", or "our") operates the https://www.peppubuild.com website (the
                    "Service").
                    <br /><br /><br /> We use your data to provide and improve the Service. By using the Service, you agree
                    to the
                    collection and use of information in accordance with this policy. Unless otherwise defined in this
                    Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and
                    Conditions.</span>
                <h1 class="head-content">How we Access your Data
                </h1>
                <span id="ilg2" class="light">Peppubuild doesn't access your personal information or data directly. When you
                    sign in
                    with the Google identity button, we store your personal information in your browser's local storage. We
                    also create a
                    unique identity made of "strings" to match your email address.
                    Projects created and published by our users are stored in Firebase, we don't collect
                    your personal information, we only require your email address.</span>
                <h1 class="head-content">How we Store Data
                </h1>
                <span id="ilg2" class="light">Peppubuild doesn't store user personal information or data. Personal
                    information
                    is stored in the user's browser.
                    Projects created and published by our users are stored in Firebase, we don't collect
                    your personal information, we only require your email address.</span>
                <h1 class="head-content">Data Deletion
                </h1>
                <span id="ilg2" class="light">When the user clicks on the logout button from your dashboard, all personal
                    data stored
                    in the browser is deleted. According to <a href="https://auth0.com/blog/secure-browser-storage-the-facts/">
                    Auth0 security guide</a>,
                    we set an expiration time (TTL) for local storage data and same origin settings, to avoid authentication
                    issues.
                    If you would like us to remove your email address and delete all of your projects
                    from Firestore, send us a message <a href="https://peppubuild.com/about">in the contact page</a>.</span>
                <h1 class="head-content">Changes to Policy
                </h1>
                <span id="ilg2" class="light">This Privacy Policy is subject to occasional revision, and we reserve the
                    right to modify
                    this Privacy Policy relating to Peppubuild at any time, effective upon posting of an updated version of
                    this Privacy Policy. This Policy is effective from 23rd May, 2023.</span>
            </section>
            <Footers />
        </body>
    </div>
</template>

<script>
import Footers from '../components/Footers.vue'
import Headers from '../components/Headers.vue'
export default {
    name: 'Privacy',

    components: { Footers, Headers },
}
</script>

<style>
.p-content {
    padding-bottom: 50px;
    text-align: justify;
    padding-left: 10vw;
    padding-right: 10vw;
}

.head-content {
    margin: 0;
    padding: 20px;
    font-size: 30px;
    text-align: center;
}

.light {
    font-weight: 100;
}</style>