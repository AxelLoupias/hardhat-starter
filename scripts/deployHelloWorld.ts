import { ethers } from 'hardhat'

async function main(): Promise<void> {
    const initialMessage = 'Hello World'

    const HelloWorld = await ethers.getContractFactory('HelloWorld')
    const helloWorld = await HelloWorld.deploy(initialMessage)

    await helloWorld.deployed()

    console.log(
        `HelloWorld with initialMessage: ${await helloWorld._message()} and deployed to ${
            helloWorld.address
        }`
    )
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
