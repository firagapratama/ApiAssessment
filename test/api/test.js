const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/rightData')
const DATA2 = require('../../data/wrongData')

describe('Get User from page 3', () => {
    const response = request(baseUrl())
    .get('/api/users?page=3')
    it('response status equal to 200', async() => {
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async() => {
        expect((await response).body).to.haveOwnProperty(`page`)
    })
})

describe('Get Single User with ID 10', () => {
    const response = request(baseUrl())
    .get('/api/users/10')
    it('response status equal to 200', async() => {
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async() => {
        expect((await response).body).to.haveOwnProperty(`data`)
    })
})

describe('Register succesful', () => {
    const response = request(baseUrl())
    .post('/api/register')
    .send(DATA.RIGHT_DATA_REGISTER)
    it('response status equal to 200', async() => {
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async() => {
        expect((await response).body).to.haveOwnProperty(`id`)
    })
})

describe('Register failed', () => {
    const response = request(baseUrl())
    .post('/api/register')
    .send(DATA2.WRONG_DATA_REGISTER)
    it('response status equal to 400', async() => {
        expect((await response).status).to.equal(400)
    })

    it('response body to haveOwnProperty', async() => {
        expect((await response).body).to.haveOwnProperty(`error`)
    })
})
