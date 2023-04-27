import React from 'react'

const Login = () => {
  return (
    <div>
      <main class="form-signin m-auto w-80 pt-36">
  <form >
    <h1 class="h3 mb-3 fw-normal text-white">Пожалуйста, войдите</h1>

    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Емайл адрес</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Пароль</label>
    </div>

    <div class="checkbox mb-3">
      <label className="text-white">
        <input type="checkbox" value="remember-me"/> Запомнить меня
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
    {/* <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p> */}
  </form>
</main>
    </div>
  )
}

export default Login
