import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-auto border-top text-white bg-zinc-900 " >
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"></svg>
      </a>
      <span class="mb-3 mb-md-3 text-body-secondary">© 2023 Company, Inc</span>
    </div>
    <ul class="nav col-md-4 me-5 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#">пук<svg class="bi" width="24" height="24"></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#">пук<svg class="bi" width="24" height="24"></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#">пук<svg class="bi" width="24" height="24"></svg></a></li>
    </ul>
  </footer>
  
  )
}

export default Footer
//<use xlink:href="#bootstrap"></use>
// fixed-bottom w-auto