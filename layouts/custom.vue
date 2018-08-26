<template>
<div>
  <nav role="navigation" class="columns is-mobile is-centered navbar-is-grey" aria-label="main navigation">
    <div class="column is-10-desktop is-12-mobile">
      <div class="navbar">
        <div class="navbar-brand">
          <nuxt-link to='/' class="navbar-item">
                <img width="80" height="80" src="img/DS_LOGO.png">
          </nuxt-link>
          <a role="button" class="navbar-burger" :class="{'is-active': toggleNavMenu}" aria-label="menu" aria-expanded="false" @click= "toggleNavMenu = !toggleNavMenu" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" :class="{'is-active': toggleNavMenu}">
          <div class="navbar-end is-size-7 has-space has-text-right-mobile">
            <nuxt-link to='/' class="navbar-item is-uppercase">
              HOME
            </nuxt-link>
            <nuxt-link to='/about' class="navbar-item is-uppercase ">
              ABOUT US
            </nuxt-link>
            <nuxt-link to='/faculties' class="navbar-item is-uppercase">
              FACULTIES
            </nuxt-link>
            <nuxt-link to='/services' class="navbar-item is-uppercase">
              SERVICES
            </nuxt-link>
            <nuxt-link to='/gallery' class="navbar-item is-uppercase">
              GALLERY
            </nuxt-link>
            <nuxt-link to='/news' class="navbar-item is-uppercase">
              NEWS
            </nuxt-link>
            <nuxt-link to='/careers' class="navbar-item is-uppercase">
              CAREERs
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="body">
      <nuxt/>
  </div>
  <!--Footer-->
  <footer class="columns is-centered is-multiline footer-bg">
      <div class="column is-10">
        <div class="columns is-multiline is-centered">
          <div class="column is-9 has-padding pv3">
            <div class="columns is-centered is-multiline is-mobile">
              <div class="column is-12-mobile is-6-tablet is-size-6">
                <div class="has-padding pv2 ph2">
                  <h4 class="title is-size-6 has-text-grey-darker">Quick Links</h4>
                  <p class="has-text-grey-dark">Home</p>
                  <p class="has-text-grey-dark">About Us</p>
                  <p class="has-text-grey-dark">Faculties</p>
                  <p class="has-text-grey-dark">Services</p>
                  <p class="has-text-grey-dark">Gallery</p>
                  <p class="has-text-grey-dark">News</p>
                  <p class="has-text-grey-dark">Careers</p>
                </div>            
              </div>
              <div class="column is-12-mobile is-6-tablet is-size-6">
                <div class="has-padding pv2 ph2">
                  <h4 class="title is-size-6 has-text-grey-darker">Features</h4>
                  <p class="has-text-grey-dark">Mobile application development</p>
                  <p class="has-text-grey-dark">CBT Examinations</p>
                  <p class="has-text-grey-dark">Media and Animations Training</p>
                  <p class="has-text-grey-dark">E-Library and Research Facilities</p>    
                  <p></p>
                </div>        
              </div>
              <div class="column is-12-tablet has-padding pv2 ph2 has-text-centered-mobile">
                <div class="has-padding pv2 ph2">
                    <p class="is-size-6"><b>Copyright &copy; 2018 - All Rights Reserved - Delta State ICT Innovation Hub</b></p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-3 contact-bg has-padding pv3 has-text-centered">
            <h4 class="title is-size-5">Contact Us</h4>
            <div class="columns is-centered is-mobile">
              <div class="column is-4">
                <a href="" class="image img-is-centered is-block is-24x24">
                  <img src="/img/003-facebook.svg">
                </a>
              </div>
              <div class="column is-4">
                <a href="" class="image img-is-centered is-block is-24x24">
                  <img src="/img/005-twitter.svg">
                </a>
              </div>
              <div class="column is-4">
                <a href="" class="image img-is-centered is-block is-24x24">
                  <img src="/img/004-google-plus.svg">
                </a>
              </div>
            </div>
            <div class="columns is-centered has-text-grey-dark is-size-6 is-mobile">
              <div class="column is-3 has-text-centered has-padding pv1 ph1">
                <div class="has-padding pv1 ph1">
                  <span class="icon is-size-5">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                </div>
              </div>
              <div class="column is-9 has-text-left ">
                <div class="has-padding pv1 ph1">
                  <p>Delta State Innovation Hub
                    <br>No 1, DBS Junction Okpanam Road,
                    <br>Besides Zenith Bank, Asaba
                    <br>Delta State
                  </p>
                </div>
              </div>
            </div>
            <div class="columns is-centered has-text-grey-dark is-size-6 is-mobile">
              <div class="column is-3 has-text-centered has-padding pv1 ph1">
                <div class="has-padding pv1 ph1">
                  <span class="icon is-size-5">
                    <i class="fas fa-at"></i>
                  </span>
                </div>
              </div>
              <div class="column is-9 has-text-left">
                <div class="has-padding pv1 ph1">
                    <p>info@dsihub.org.ng</p>
                </div>
              </div>
            </div>
            <div class="columns is-centered has-text-grey-dark is-size-6 is-mobile">
              <div class="column is-3 has-text-centered has-padding pv1 ph1">
                <div class="has-padding pv1 ph1">
                  <span class="icon is-size-5">
                    <i class="fas fa-phone"></i>
                  </span>
                </div>
              </div>
              <div class="column is-9 has-padding has-text-left pv1 ph1">
                <div class="has-padding pv1 ph1">
                  <p>+234 7058107499</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </footer>
</div>
</template>
<script>
export default {
  head:{
      
    },
  data() {
      return {
        toggleNavMenu: false
      }
}
};
</script>
<style lang="scss" scoped>
.body{
  min-height: 90vh;
}
.footer-bg{
  background: #e4e4e4 !important;
}
.contact-bg{
  background: black;
  color: #fafafa !important;
}
.navbar-is-grey{
  background:#fcfcfc;
}
.img-is-centered{
  margin: auto;
}
</style>