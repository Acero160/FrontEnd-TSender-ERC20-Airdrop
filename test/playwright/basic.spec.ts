import basicSetup from '../wallet-setup/basic.setup'
import { testWithSynpress } from '@synthetixio/synpress'
import { MetaMask, metaMaskFixtures } from '@synthetixio/synpress/playwright'
import { anvil1Address, anvil2Address, mockTokenAddress, oneAmount } from '../test-constants'


const test = testWithSynpress(metaMaskFixtures(basicSetup))

const { expect } = test

test('should show mock token in token box', async ({ context, page, metamaskPage, extensionId }) => {
  
  const metamask = new MetaMask(context, metamaskPage, basicSetup.walletPassword, extensionId)

  
  await page.goto('/')

  
  await page.getByTestId('rk-connect-button').click()
  await page.getByTestId('rk-wallet-option-io.metamask').waitFor({
    state: 'visible',
    timeout: 30000
  });
  await page.getByTestId('rk-wallet-option-io.metamask').click();
  await metamask.connectToDapp();

  const customNetwork = {
    name: 'Anvil',
    rpcUrl: 'http://127.0.0.1:8545',
    chainId: 31337,
    symbol: 'ETH'
  }
  await metamask.addNetwork(customNetwork)

  await page.getByRole('textbox', { name: '0x', exact: true }).waitFor({
    state: 'visible',
    timeout: 30000
  });
  await page.getByRole('textbox', { name: '0x', exact: true }).fill(mockTokenAddress);
  await page.getByRole('textbox', { name: '0x123..., 0x456...' }).fill(anvil2Address);
  await page.getByRole('textbox', { name: '200, 300...' }).fill(oneAmount);
  await expect(page.getByText('Token Name:Mock Token')).toBeVisible();
})