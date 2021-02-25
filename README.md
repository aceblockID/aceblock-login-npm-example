[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/aceblockID/aceblock-login-npm-example">
    <img src="images/aceblock_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Aceblock OIDC client npm package</h3>

  <p align="center">
    This is opesource project of npm package from Aceblock, to help you easilly protect your web application.
    <br />
    <a href="https://github.com/aceblockID/aceblock-login-npm-example"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/aceblockID/aceblock-login-npm-example">View Demo</a>
    ·
    <a href="https://github.com/aceblockID/aceblock-login-npm-example/issues">Report Bug</a>
    ·
    <a href="https://github.com/aceblockID/aceblock-login-npm-example/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is showcase how need to be implemented our [Aceblock OIDC client](https://github.com/aceblockID/aceblock-OIDC-client) npm package, to work properly.


### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [JavaScript](https://www.javascript.com/)
* [NPM](https://www.npmjs.com/)
* [ExpressJS](https://expressjs.com/)
* ...



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Befor you start setting up the project you need to install:

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Empty template of this project with detailed instructions for instalation [here](https://github.com/aceblockID/aceblock-login-npm-template).


<!-- USAGE EXAMPLES -->
## Usage

Here are four simple steps how to test this example:
* Start the project with
    ```sh
        node server.js
    ```
* Open web browser and enter url (enter same port number as is in project):
    ```sh
        http://localhost:4070
    ```
* click on Login link, if everything is ok, qr code should be displayed
* now open Postmen application and in dropdown menu select `POST` option and next to it enter `localhost:4070/callback` (with same port number as in web browser)
* under url, select `Headers` tab and under `KEY` enter `id_token` and under value enter `id token value stored up in this readme under Prerequisites` then hit button send and go back to web browser. If everything is ok, page should be redirected from login qr code to user page.
* you can also test if you can access other links where you have added protection (as described in 12. step of instalation)
* also you can test if log off works by clicking on link logoff and after that on protected pages - access should be forbidden


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/aceblockID/aceblock-login-npm-example/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Gregor Sajovic - [@aceblockcom](https://twitter.com/aceblockcom) - gregor.sajovic@netis.si

Project Link: [https://github.com/aceblockID/aceblock-login](https://github.com/your_username/repo_name)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/aceblockID/aceblock-login-npm-example.svg?style=for-the-badge
[contributors-url]: https://github.com/aceblockID/aceblock-login-npm-example/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/aceblockID/aceblock-login-npm-example.svg?style=for-the-badge
[forks-url]: https://github.com/aceblockID/aceblock-login-npm-example/network/members
[stars-shield]: https://img.shields.io/github/stars/aceblockID/aceblock-login-npm-example.svg?style=for-the-badge
[stars-url]: https://github.com/aceblockID/aceblock-login-npm-example/stargazers
[issues-shield]: https://img.shields.io/github/issues/aceblockID/aceblock-login-npm-example.svg?style=for-the-badge
[issues-url]: https://github.com/aceblockID/aceblock-login-npm-example/issues
[license-shield]: https://img.shields.io/github/license/aceblockID/aceblock-login-npm-example.svg?style=for-the-badge
[license-url]: https://github.com/aceblockID/aceblock-login-npm-example/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/aceblockcom/
[product-screenshot]: images/screenshot.png
[instalation instructions](https://github.com/aceblockID/aceblock-login-npm-example/blob/master/README.md)
