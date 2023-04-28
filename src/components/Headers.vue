<template>
    <div class="navbar">
        <div class="navbar-container" data-gjs="navbar">
            <a href="/" class="navbar-brand"><img src="../assets/logo.png" class="nav-img" /></a>
            <div class="navbar-burger" id="iksl">
                <div class="navbar-burger-line">
                </div>
                <div class="navbar-burger-line">
                </div>
                <div class="navbar-burger-line">
                </div>
            </div>
            <div data-gjs="navbar-items" class="navbar-items-c">
                <nav class="navbar-menu">
                    <a href='/' class="navbar-menu-link">Home</a>
                    <a href='/about' class="navbar-menu-link">About</a>
                    <a href='/contact' class="navbar-menu-link">Contact</a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
.navbar{
  background-color:rgb(17, 17, 17);
  color:rgb(221, 221, 221);
  min-height:50px;
  width:100%;
}
.navbar-container{
  max-width:950px;
  margin-top:0px;
  margin-right:auto;
  margin-bottom:0px;
  margin-left:auto;
  width:95%;
}
.navbar-container::after{
  content:"";
  clear:both;
  display:block;
}
.navbar-brand{
  padding-top:10px;
  padding-bottom:10px;
  display:block;
  float:left;
}
.navbar-burger{
  margin-top:10px;
  margin-right:0px;
  margin-bottom:10px;
  margin-left:0px;
  width:45px;
  padding-top:5px;
  padding-right:10px;
  padding-bottom:5px;
  padding-left:10px;
  display:none;
  float:right;
  cursor:pointer;
}
.navbar-burger-line{
  padding-top:1px;
  padding-right:1px;
  padding-bottom:1px;
  padding-left:1px;
  background-color:white;
  margin-top:5px;
  margin-right:0px;
  margin-bottom:5px;
  margin-left:0px;
}
.navbar-items-c{
  display:inline-block;
  float:right;
}
.navbar-menu{
  padding-top:10px;
  padding-right:0px;
  padding-bottom:10px;
  padding-left:0px;
  display:block;
  float:right;
  margin-top:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
}
.navbar-menu-link{
  margin-top:0px;
  margin-right:0px;
  margin-bottom:0px;
  margin-left:0px;
  color:inherit;
  text-decoration:none;
  display:inline-block;
  padding-top:10px;
  padding-right:15px;
  padding-bottom:10px;
  padding-left:15px;
  font-family:Helvetica, sans-serif;
  font-size: medium;
}
@media (max-width: 768px){
  .navbar-items-c{
    display:none;
    width:100%;
  }
  .navbar-burger{
    display:block;
  }
  .navbar-menu{
    width:100%;
  }
  .navbar-menu-link{
    display:block;
  }
}
</style>