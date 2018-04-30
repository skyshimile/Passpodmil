var Username = "skyshimile@gmail.com"
var IDdate = "x190418"+Username
var psw1 = "1234"
var password = "12345678"
var FirstName = "Skyqa"
var LastName = "Mile"

context('Register',function(){
  beforeEach(function(){
    cy.visit('https://passpod.com/id/register')
  })

//   it('Blank',function(){
//     cy.get('form > .btn').click()
//     cy.get(':nth-child(4) > :nth-child(4)').should('contain','Please check Terms and Condition')
//     cy.get('.form-row > :nth-child(1) > span').should('contain','first_name cannot be blank')
//     cy.get('.form-row > :nth-child(2) > span').should('contain','last_name cannot be blank')
//     cy.get('form > :nth-child(2) > span').should('contain','email cannot be blank')
//     cy.get(':nth-child(3) > span').should('contain','Password at least 6 character')
//     cy.get(':nth-child(4) > span').should('contain','re_password cannot be blank')
//     cy.get(':nth-child(4) > :nth-child(4)').should('contain','Please check Terms and Condition')
//     cy.get('.form-log-wrap').scrollIntoView()
//     cy.screenshot('Blankinput.png')
//   })

//   it('T&C Alert',function(){
//     cy.get('.form-row > :nth-child(1) > .form-control').type(FirstName)
//     cy.get('.form-row > :nth-child(2) > .form-control').type(LastName)
//     cy.get('form > :nth-child(2) > .form-control').type(Username+1)
//     cy.get(':nth-child(3) > .form-control').type(password)
//     cy.get(':nth-child(4) > .form-control').type(password)
//     cy.get('form > .btn').click()
//     cy.get(':nth-child(4) > :nth-child(4)').should('contain','Please check Terms and Condition')
//     cy.get('.form-row > :nth-child(1) > .form-control').scrollIntoView()
//     cy.screenshot('T&CAlert.png')
//   })

//   //Reg using Registered email
//   it('Register using registered email',function(){
//     cy.get('.form-row > :nth-child(1) > .form-control').type(FirstName)
//     cy.get('.form-row > :nth-child(2) > .form-control').type(LastName)
//     cy.get('form > :nth-child(2) > .form-control').type(Username)
//     cy.get(':nth-child(3) > .form-control').type(password)
//     cy.get(':nth-child(4) > .form-control').type(password)
//     cy.get('.form-check-input').check()
//     cy.get('form > .btn').click()
//     cy.get('.alert > h5').should('contain','Register Error')
//     cy.get('.alert > h6').should('contain','Email already registered')
//     cy.get('.alert > h5').scrollIntoView()
//     cy.screenshot('Registeredemail.png')
//   })

//   it('invalid password-retype',function(){
//     cy.get('.form-row > :nth-child(1) > .form-control').type(FirstName)
//     cy.get('.form-row > :nth-child(2) > .form-control').type(LastName)
//     cy.get('form > :nth-child(2) > .form-control').type(Username)
//     cy.get(':nth-child(3) > .form-control').type(psw1)
//     cy.get(':nth-child(4) > .form-control').type(password)
//     cy.get('.form-check-input').check()
//     cy.get('form > .btn').click()
//     cy.get(':nth-child(3) > span').should('contain','Password at least 6 character')
//     cy.get(':nth-child(4) > :nth-child(2)').should('contain','Password doesn\'t match')
//     cy.get('.form-row > :nth-child(1)').scrollIntoView()
//     cy.screenshot('PasswordAlert.png')
//   })
    //Reg using email
    it('Normal Register',function(){
      cy.get('.form-row > :nth-child(1) > .form-control').type(FirstName)
      cy.get('.form-row > :nth-child(2) > .form-control').type(LastName)
      cy.get('form > :nth-child(2) > .form-control').type(IDdate)
      cy.get(':nth-child(3) > .form-control').type(password)
      cy.get(':nth-child(4) > .form-control').type(password)
      cy.get('.form-check-input').check()
      cy.get('form > .btn').click()
      cy.get('form > h1').should('contain','Confirm Account')
      cy.get('form > :nth-child(2)').should('contain','We already sent an email to:')
      cy.get('form > :nth-child(4)').should('contain','Please check your email to confirm your account. If you can’t find the email, please press button below.')
      cy.get('strong').should('contain',IDdate)
      cy.get('form > h1').scrollIntoView()
      // cy.screenshot('NormalReg.png')
      cy.get('form > .btn').click({force:true})
      cy.wait(20000)
      cy.get('.alert').should('contain','<div.alert.alert-success>')
      cy.get('.alert').should('contain','Resend Success')
    })
}) 

context('Login',function(){
  beforeEach(function(){
    cy.visit('https://passpod.com/id/home')
    cy.get('.account-wrap > [href="/login"]').click({force : true})
  })
    //Login using unregistered email
    it('password length', function () {
      cy.get('form > :nth-child(1) > div > .form-control').type(1+Username)
      cy.get('.form-pwd > .form-control').type(password)
      cy.get('form > .btn-orange').click()
      cy.get('body').should('contain','Login ErrorUser not registered')
  })

  //Username salah
  it('wrong username', function () {
    cy.get('form > :nth-child(1) > div > .form-control').type(Username+1)
    cy.get('.form-pwd > .form-control').type(password)
    cy.get('form > .btn-orange').click()
    cy.get('body').should('contain','is not a valid email.')
  })

  //
  it('wrong password', function () {
    cy.get('form > :nth-child(1) > div > .form-control').type(Username)
    cy.get('.form-pwd > .form-control').type(password+1)
    cy.get('form > .btn-orange').click()
    cy.get('body').should('contain','Login ErrorEmail or password mismatch')
  })
})