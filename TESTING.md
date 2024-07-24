# Winstons Fan Club -  Testing

Visit the deployed site: [Winstons Fan Club](https://ashley9368.github.io/Winstons-Fanclub-Project-1/)

- - -

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [Lighthouse](#lighthouse)
  * [Full Testing](#full-testing)

Throughout the build i was constantly checking in the dev tools that the code i was applying was effective and applying correctly.

I have gone through every page on my website and checked the responsiveness for various different screen sizes.

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/#validate_by_input) I used the W3C validator to make sure all my code was correct in the html, And for css i used W3C jigsaw.

* [index.html](assets/images/index-w3c.png) Passed.
* [history.html](assets/images/history-page-w3c.png) Passed.
* [signup.html](assets/images/signup-page-w3c.png) - Passed.
* [signup.html](assets/images/thankyou-w3c.png) - Passed.

* [style.css](assets/images/ccs-code-jigsaw.png) - Passed, 3 warnings.

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website. 

### Desktop Results 

All pages of the site are achieving a score of 100 across the 4 categories.

![index.html](assets/images/index-lighthouse-desktop.png)

![history.html](assets/images/history-lighthouse-desktop.png)

![signup.html](assets/images/signup-lighthouse-desktop.png)

![thankyou.html](assets/images/thankyou-lighthouse-desktop.png)

### Mobile Results 

![index.html](assets/images/index-lighthouse.png)

![history.html](assets/images/history-lighthouse.png)

![signup.html](assets/images/signup-lighthouse.png)

![thankyou.html](assets/images/thankyou-lighthouse.png)

- - -

### Full Testing

Full testing was performed on the following devices:

* Desktop:
  * Computer 1920x1080px
  * Computer 1440px
* ipad
  * Surface Duo
  * ipad pro
* Mobile Devices:
  * iPhone SE.
  * iPhone 11 pro.
  * Phone XR.

* I tested the devices on Google Chrome.

`Home Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The title | Takes the user back to the home page | Clicked title | Home page reloads | Pass |
| History Tab | Takes user to the history page | Clicked history tab | Opens history page | Pass |
| signup Tab | Takes user to the history page | Clicked signup tab | Opens signup page | Pass |
| Explore History Button | takes user to history page | Clicked on button | opens history page | Pass |
| Signup button | takes user to signup page | Clicked on button | Takes user to signup page | Pass |

`History page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The title | Takes the user back to the home page | Clicked title | Home page reloads | Pass |
| Home Tab | Takes user to the home page | Clicked home tab | Opens home page | Pass |
| signup Tab | Takes user to the history page | Clicked signup tab | Opens signup page | Pass |

`Signup page`

| The title | Takes the user back to the home page | Clicked title | Home page reloads | Pass |
| Home Tab | Takes user to the home page | Clicked home tab | Opens home page | Pass |
| History Tab | Takes user to the history page | Clicked history tab | Opens history page | Pass |
| Form | User fills out form | Written in First name Last name and address | Writes in text boxes | Pass |
| Submit | Takes user to thank you page | Clicked submit button | Opens thank you page | Pass |

`Thank you page`
| The title | Takes the user back to the home page | Clicked title | Home page reloads | Pass |
| Home Tab | Takes user to the home page | Clicked home tab | Opens home page | Pass |
| History Tab | Takes user to the history page | Clicked history tab | Opens history page | Pass |
| signup Tab | Takes user to the history page | Clicked signup tab | Opens signup page | Pass |