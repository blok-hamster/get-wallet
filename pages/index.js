import { ethers } from "ethers";
import { useState } from "react";

export default function Home() {
  const [adminKeyPhrase, setAdminKeyPhrase] = useState("");
  const [paymentKeyPhrase, setPaymentKeyPhrase] = useState("");
  const [userKeyPhrase, setUserKeyPhrase] = useState("");
  const [adminAddress, setAdminAddress] = useState("");
  const [usdtAddress, setUsdtAddress] = useState("");
  const [usdcAddress, setUsdcAddress] = useState("");
  const [busdAddress, setBusdAddress] = useState("");

  const generateAdminPhrases = async () => {
    const phrase = ethers.Wallet.createRandom().mnemonic.phrase;
    setAdminKeyPhrase(phrase);
  };

  const generatePaymentPhrases = async () => {
    const phrase = ethers.Wallet.createRandom().mnemonic.phrase;
    setPaymentKeyPhrase(phrase);
  };

  const generateUserPhrases = async () => {
    const phrase = ethers.Wallet.createRandom().mnemonic.phrase;
    setUserKeyPhrase(phrase);
  };

  const walletDetails = (walletIndex, phrase) => {
    const account = ethers.utils.HDNode.fromMnemonic(phrase);
    const address = account.derivePath(`m/44'/60'/0'/0/${walletIndex}`).address;
    return address;
  };

  const getAdminAddress = async () => {
    const address = walletDetails(0, adminKeyPhrase);
    setAdminAddress(address);
  };

  const generateUsdtAddress = async () => {
    const address = walletDetails(1, adminKeyPhrase);
    setUsdtAddress(address);
  };

  const generateUsdcAddress = async () => {
    const address = walletDetails(2, adminKeyPhrase);
    setUsdcAddress(address);
  };

  const generateBusdAddress = async () => {
    const address = walletDetails(3, adminKeyPhrase);
    setBusdAddress(address);
  };

  const generatePhrase = async () => {
    await generateAdminPhrases();
    await generateUserPhrases();
    await generatePaymentPhrases();
  };

  const generateAddress = async () => {
    event.preventDefault();
    await getAdminAddress();
    await generateUsdtAddress();
    await generateUsdcAddress();
    await generateBusdAddress();
  };

  return (
    <div>
      <br />
      <br />
      <br />
      ADMIN KEY PHRASE: {adminKeyPhrase}
      <br />
      <br />
      <br />
      PAYMENT KEY PHRASE: {paymentKeyPhrase}
      <br />
      <br />
      <br />
      USER KEY PHRASE: {userKeyPhrase}
      <br />
      <br />
      <br />
      ADMIN ADDRESS: {adminAddress}
      <br />
      <br />
      <br />
      USDT ADDRESS: {usdtAddress}
      <br />
      <br />
      <br />
      USDC ADDRESS: {usdcAddress}
      <br />
      <br />
      <br />
      BUSD ADDRESS: {busdAddress}
      <br />
      <br />
      <br />
      <button onClick={generatePhrase}>Generate phrase</button>
      <br />
      <br />
      <br />
      <button onClick={generateAddress}>Generate Address</button>
    </div>
  );
}
