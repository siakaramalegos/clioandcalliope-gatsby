import React from 'react'

export default () => (
  <footer>
    <div className="inset-1220">
      <div className="copyright">
        <p>&copy; 2015-
          <script>document.write(new Date().getFullYear())</script> Clio + Calliope LLC</p>
      </div>
      <div className="social-media right">
        <p>
          <a href="https://twitter.com/clioandcalliope" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Twitter</span>
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/clioandcalliope/" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Facebook</span>
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
)
