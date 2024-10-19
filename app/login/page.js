import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      {/* <label htmlFor="first_name">First Name:</label>
      <input id="first_name" name="first_name" type="name" required />
      <label htmlFor="last_name">Last Name:</label>
      <input id="last_name" name="last_name" type="name" required />
      <label htmlFor="age">Age:</label>
      <input id="age" name="age" type="number" required /> */}
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}