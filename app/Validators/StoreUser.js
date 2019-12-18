'use strict'

class StoreUser {
  get rules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }

  get messages() {
    return {
      'username.required': 'Você deve fornecer um nome de usuário.',
      'username.unique': 'Já existe um registro com esse nome de usuário.',
      'email.required': 'Você deve fornecer um endereço de email.',
      'email.email': 'Você deve fornecer um endereço de email válido.',
      'email.unique': 'Este e-mail já está registado.',
      'password.required': 'Você deve fornecer uma senha.'
    }
  }
}

module.exports = StoreUser
