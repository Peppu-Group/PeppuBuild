<template>
    <div class="background">

        <body id="iljx">
            <Headers />
            <section class="bdg-sect">
                <h1 class="heading">Talk to Us
                </h1>
                <span id="ilg2">Do you have any questions about Peppubuild? You can watch the video of how it works below.
                    Schedule a demo to talk about how Peppubuild can work for you and your team.</span>
            </section>
            <form ref="form" @submit.prevent="sendEmail">
                <div class="form-container">
                    <div class="child">
                        <iframe class="img" src="https://www.youtube.com/embed/9RpRIntZ-fc">
                        </iframe>
                    </div>
                    <div class="foot-form-cont">
                        <input name="from_name" placeholder="Name" class="sub-input" required/>
                        <input name="email" placeholder="Email" class="sub-input" type="email" required/>
                        <textarea name="message" placeholder="Message" class="sub-input" required></textarea>
                        <button type="submit" class="sub-btn">Submit</button>
                    </div>
                </div>
            </form>
            <Footers />
        </body>
    </div>
</template>
  
<script>
import Footers from '../components/Footers.vue'
import Headers from '../components/Headers.vue'
import emailjs from '@emailjs/browser'
import { useToast } from "vue-toastification";

const toast = useToast();

export default {
    name: 'Contact',
    components: { Headers, Footers },

    methods: {
        sendEmail() {
            emailjs.sendForm('service_ye8ngya', 'template_hjuc4sp', this.$refs.form, 'gaqDvZ1uPiEy0Z2CO')
                .then((result) => {
                    toast.success(`${result.text} Successfully sent mail`, {
                        timeout: 2000
                    });
                    this.$refs.form.reset();
                }, (error) => {
                    toast.error(`${error.text} An error occured`, {
                        timeout: 2000
                    });
                    this.$refs.form.reset();
                });
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}

.heading {
    margin: 0;
    padding: 20px;
    font-size: 40px;
    text-align: center;
    background: -webkit-linear-gradient(rgb(26, 207, 62), rgb(12, 13, 5));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.bdg-sect {
    text-align: center;
    padding: 7vw;
}

.heading-text {
    text-align: center;
    padding: 20px;
}

#ilg2 {
    font-family: Poppins, sans-serif;
    font-size: 18px;
    text-align: center;
}

.sub-input {
    width: 95%;
    margin-top: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    background-color: rgb(235, 232, 236);
    border-top-width: initial;
    border-right-width: initial;
    border-bottom-width: initial;
    border-left-width: initial;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    border-top-color: initial;
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    color: black;
}

.sub-btn {
    width: 95%;
    margin-top: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    background-color: #2b7510;
    border-top-width: initial;
    border-right-width: initial;
    border-bottom-width: initial;
    border-left-width: initial;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    border-top-color: initial;
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    color: black;
}

.form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 7vw;
}

@media (max-width: 600px) {
    .form-container {
        display: block;
        width: 100%;
        padding-top: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
    }
}
</style>