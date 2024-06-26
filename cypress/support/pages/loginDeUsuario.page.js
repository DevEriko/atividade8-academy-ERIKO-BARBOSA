export default class LoginPage {
    inputEmail = '[name="email"]'
    inputSenha = '[name="password"]'

    buttonLogin = '.login-button'

    labelAlerta = '.input-error'

    labelFalhaAutenticar = '.modal-body > h3'
    labelInvalido = '.error-message'


    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(password) {
        cy.get(this.inputSenha).type(password)
    }

    clickButtonLogin() {
        cy.get(this.buttonLogin).click();
    }
}

