import{test, expect} from '@playwright/test'

test.skip('Skiping', async({page})=>{


})
test('Failing', async({page})=>{

    test.fail()
})

test('fixme', async (page) => {
    
})

test('slow test', async (page) => {
    test.slow()
})  