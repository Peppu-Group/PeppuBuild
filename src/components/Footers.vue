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
                <div class="socials">
                    <span class="badge-link">ln</span>
                    <span class="badge-link">t</span>
                    <span class="badge-link">g</span>
                    <span class="badge-link">in</span>
                </div>
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
.footer-content{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  text-align:center;
}
.footer-content h3{
  font-size:2.1rem;
  font-weight:500;
  text-transform:capitalize;
  line-height:3rem;
}
.footer-content p{
  max-width:500px;
  margin-top:10px;
  margin-right:auto;
  margin-bottom:10px;
  margin-left:auto;
  line-height:28px;
  font-size:14px;
  color:rgb(202, 205, 210);
}
#i5l4t9{
  font-family:Helvetica, sans-serif;
}
#i56doj{
  font-family:Helvetica, sans-serif;
}
.socials{
  list-style-type:none;
  list-style-position:initial;
  list-style-image:initial;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:1rem;
  margin-right:0px;
  margin-bottom:3rem;
  margin-left:0px;
}
.socials li{
  margin-top:0px;
  margin-right:10px;
  margin-bottom:0px;
  margin-left:10px;
}
.socials a{
  text-decoration:none;
  color:rgb(255, 255, 255);
  border-top-width:1.1px;
  border-right-width:1.1px;
  border-bottom-width:1.1px;
  border-left-width:1.1px;
  border-top-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  border-left-style:solid;
  border-top-color:white;
  border-right-color:white;
  border-bottom-color:white;
  border-left-color:white;
  border-image-source:initial;
  border-image-slice:initial;
  border-image-width:initial;
  border-image-outset:initial;
  border-image-repeat:initial;
  padding-top:5px;
  padding-right:5px;
  padding-bottom:5px;
  padding-left:5px;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
  border-bottom-left-radius:50%;
}
.socials a i{
  font-size:1.1rem;
  width:20px;
  transition-duration:0.4s;
  transition-timing-function:ease;
  transition-delay:0s;
  transition-property:color;
}
.socials a:hover i{
  color:aqua;
}
footer{
  position:absolute;
  left:0px;
  right:0px;
  background-image:initial;
  background-position-x:initial;
  background-position-y:initial;
  background-size:initial;
  background-attachment:initial;
  background-origin:initial;
  background-clip:initial;
  background-color:rgb(17, 17, 17);
  height:auto;
  width:100vw;
  padding-top:40px;
  color:rgb(255, 255, 255);
}
.footer-bottom{
  background-image:initial;
  background-position-x:initial;
  background-position-y:initial;
  background-size:initial;
  background-attachment:initial;
  background-origin:initial;
  background-clip:initial;
  background-color:rgb(0, 0, 0);
  width:100vw;
  padding-top:20px;
  padding-right:20px;
  padding-left:20px;
  padding-bottom:40px;
  text-align:center;
}
.footer-bottom a{
  color:green;
}
.footer-bottom span{
  text-transform:uppercase;
  opacity:0.4;
  font-weight:200;
}
#i3p4ne{
  font-family:Helvetica, sans-serif;
}
</style>