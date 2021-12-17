<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
        <div class="logo">
          <h1 class="text-light">
            <a href="/characters"><span>Builds</span></a>
          </h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <li v-if="loggedIn()" class="nav-item">
              <a class="nav-link scrollto" href="/FavoriteIndex">Favorites</a>
            </li>

            <li class="dropdown">
              <a href="#">
                <span>Account</span>
                <i class="bi bi-chevron-down"></i>
              </a>

              <ul>
                <li v-if="!loggedIn()" class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/Login">login</a>
                </li>

                <li v-if="!loggedIn()" class="nav-item">
                  <a class="nav-link" href="/signup">Signup</a>
                </li>

                <li v-if="loggedIn()" class="nav-item">
                  <a class="nav-link" href="/logout">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"> -->
    <!-- <div class="container-fluid">
        <a class="navbar-brand" href="/characters">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-if="!loggedIn()" class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Login">login</a>
            </li>
           
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                
                
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="/about">About</a></li>
              </ul>
            </li>
            
          </ul>
          SEARCH BAR
      <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
      </div>
      </div> -->
    <!-- </nav> -->
    <router-view />
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>POEBuilds</h3>
              <p>
                1234 Address St
                <br />
                New York, NY 535022
                <br />
                United States
                <br />
                <br />
                <strong>Phone:</strong>
                +1 123 456 7891
                <br />
                <strong>Email:</strong>
                info@example.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-4">
        <div class="copyright">
          &copy; Copyright
          <strong><span>Ninestars</span></strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/ -->
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<script>
export default {
  created: function () {
    this.loggedIn();
  },
  methods: {
    loggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
