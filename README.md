# Welcome! 👋

This solution to the challenge [Pod request access landing page](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG) is under construction. an early access landing page with validation of the custom form in JS will be built.

---

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
- [Author](#author)

#overview
##the challenge
Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
- The Email address field is empty should show "Oops! Please add your email"
- The email is not formatted correctly should show "Oops! Please check your email"

![gif of template](./assets/readme/preview.jpg)

##links
- [solution URL](https://github.com/MarcoFranca/Pod-request-access-landing-page)
- [live site URL](https://github.com/MarcoFranca/Pod-request-access-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- desktop-first

### What I learned

I improved my knowledge in ``HTML``and ``CSS``, and I learned how to make a framework for email validation in ```JavaScript```

- _**I learned to use a tag as a container so that in the design I can put a button inside the input:**_

```html
<form name="register" class="register">
  <input name="email" type="email" placeholder="Email address" >
  <button type="submit" id="submit" class="button" onclick="validacaoEmail(register.email)">Request Access</button>
</form>
```

- _**I learned how to use the `-webkit-autofill` pseudo-classe to remove the background color when we select an existing data in memory**_

```css
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px #2C344B inset;
  -webkit-text-fill-color: white !important;
}
```

- _**I reinforced how to use the ``after`` pseudo-class to create a filter color on top of the img**_

````css
.background-right:after{
content: '';
width: 100%;
height: 100%;
background-color: rgba(84, 230, 175, 0.1);
position: absolute;

}
````

- _**I learned how to remove the ``outline`` in the input focus**_

```` css
.register input:focus{
    outline: none;
}
````

- _**I learned to use the ``.substring`` function and the ``.search`` function to be able to go through and validate the email field**_

```javascript
   function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  user = field.value.substring(0,field.value.length)
  btn = document.querySelector("#submit");

  if ((usuario.length >=1) &&
          (dominio.length >=3) &&
          (usuario.search("@")==-1) &&
          (dominio.search("@")==-1) &&
          (usuario.search(" ")==-1) &&
          (dominio.search(" ")==-1) &&
          (dominio.search(".")!=-1) &&
          (dominio.indexOf(".") >=1)&&
          (dominio.lastIndexOf(".") < dominio.length - 1)) {
    console.log("valid email address");
  }
}

```

## Author
- Linkdin - [Marco Tullio Franca](https://www.linkedin.com/in/marco-franca/)
- Frontend Mentor - [@MarcoFranca](https://www.frontendmentor.io/profile/MarcoFranca)
