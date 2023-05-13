<template>
  <div>
    <footer>
      <div class="footer-content">
        <h3 id="i5l4t9">Build with Peppubuild
        </h3>
        <p id="i56doj">Peppubuild is creating a better user interface and experience for 'drag-n-drop'.
          With our intuitive interface and GrapesJs API, anyone can create a professional-looking
          website in a matter of minutes. Wether you're a small business owner, blogger, or creative
          professional, a drag and drop website builder can help you achieve that. 
        </p>
        <ul class="socials">
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-github"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p id="i3p4ne">copyright ©
          <a href="/">Made with Peppubuild</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footers'
}
</script>

<style>
.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.footer-content h3 {
  font-size: 2.1rem;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 3rem;
}

.footer-content p {
  max-width: 500px;
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 10px;
  margin-left: auto;
  line-height: 28px;
  font-size: 14px;
  color: rgb(202, 205, 210);
}

#i5l4t9 {
  font-family: Helvetica, sans-serif;
}

#i56doj {
  font-family: Helvetica, sans-serif;
}

.socials {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
}

.socials li {
  margin: 0 10px;
}

.socials a {
  text-decoration: none;
  color: #fff;
  border: 1.1px solid white;
  padding: 5px;
  border-radius: 50%;
}

.socials a i {
  font-size: 1.1rem;
  width: 20px;
  transition: color .4s ease;
}

.socials a:hover i {
  color: aqua;
}

footer {
  position: absolute;
  left: 0px;
  right: 0px;
  padding: 5vw;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(17, 17, 17);
  height: auto;
  width: 100vw;
  padding-top: 40px;
  color: rgb(255, 255, 255);
}

.footer-bottom {
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(0, 0, 0);
  width: 100vw;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 40px;
  text-align: center;
}

.footer-bottom a {
  color: green;
}

.footer-bottom span {
  text-transform: uppercase;
  opacity: 0.4;
  font-weight: 200;
}

#i3p4ne {
  font-family: Helvetica, sans-serif;
}</style>