import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="mx-auto"></div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Account</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Cateogry
                </a>
                <ul class="dropdown-menu bg-transparent">
                  <li><a class="dropdown-item" href="#">Technology</a></li>
                  <li><a class="dropdown-item" href="#">Travelling</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Health and Fitness</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Politics and News</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Education and Creativity</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Entertainment and Sports</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="../4.about us/aboutus.html">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="../2.login page/login.html">Sign In</a>
              </li>
              <li class="nav-item2">
                <a class="nav-link active" href="../3.editor/editor.html"
                  style="background-color:rgba(0, 0, 0, 0.712); border-radius:10px;text-decoration: none ;">Write A Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}
