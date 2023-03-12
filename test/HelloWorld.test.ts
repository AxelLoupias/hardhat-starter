import { expect } from 'chai'
import hre from 'hardhat'
import { HelloWorld__factory } from '../typechain-types/index.js'

describe('HelloWorld Tests', () => {
    let HelloWorld: HelloWorld__factory

    before(async () => {
        HelloWorld = await hre.ethers.getContractFactory('HelloWorld')
    })

    it('test initial value', async function () {
        const initialMessage = 'Hello World'
        const helloWorld = await HelloWorld.deploy(initialMessage)
        expect(await helloWorld._message()).to.equal(initialMessage)
    })

    it('test update message and retrieving updated message', async function () {
        const newMessage = 'New message'
        const initialMessage = 'Hello World'
        const helloWorld = await HelloWorld.deploy(initialMessage)
        await helloWorld.updateMessage(newMessage)
        expect(await helloWorld._message()).to.equal(newMessage)
    })
})
