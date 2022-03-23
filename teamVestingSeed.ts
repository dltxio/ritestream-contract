import { ethers } from "ethers";

const teamVestingSeed = [
  {
    beneficiary: "0xA61D1f138df1E04DEe8E8A092ca20C206d88d063",
    vestingAmount: ethers.BigNumber.from("1500000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("250000"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar + 180 days
    exists: true
  },
  {
    beneficiary: "0x5C592886e7c3d72e1cFa70727CB58C03206B8EA4",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x120049Dfc4a0745AbD12C006f6cE3a1e23712B9E",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x4c52659BB00D0cC2A0f0f0245340De68a8827888",
    vestingAmount: ethers.BigNumber.from("350000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("58334"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x0523E65e510E02C2d06714277bB2CdeDE5187Bf2",
    vestingAmount: ethers.BigNumber.from("300000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("50000"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x48a41f2aE90680e118db23B1e70cbDB52591D1E6",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x344eA440050b4b2433B150a3C2BE74d8a6B71E92",
    vestingAmount: ethers.BigNumber.from("1250000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("208334"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x5cb6d79e8925b7cd63a8338Da7fE8ba98211d362",
    vestingAmount: ethers.BigNumber.from("1000000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("166667"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0xF8EDcd20766e531F91A13Ee4dd6278914d0b1d6A",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0xbcB9FFC8CFeFAfFA1dc5A09bCbafE63D8ed4d02C",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0xF608b6e593c24dbD1535649f43e5cAecb8C7d639",
    vestingAmount: ethers.BigNumber.from("300000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("50000"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0xA8B877c99fD2D5D00835cfbF1FB911f04f954C61",
    vestingAmount: ethers.BigNumber.from("3333333"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("555556"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0xf44185F2efFdE863e412a3294B3e6AB5Ae3C5656",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0xEAb965B9ADAB33efDdc1e167661CB6161954D7Bc",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0xa036E1769D7B3AcEEFB26647caa1501CAd66B2F0",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x887321B5134fEae133A242a4137239E0df68293a",
    vestingAmount: ethers.BigNumber.from("350000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("58334"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0xC419ccE1fD49F73E54E96158d0826D1fa96C25Af",
    vestingAmount: ethers.BigNumber.from("45000000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("7500000"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x7331B0776cF09170E6A97aABf0068161Bdd8Cfa1",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x350dd413277c0bC5AE584A52Dc58AA5d92cdf341",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x63732E966f48f331501939B8Fe72312846F31807",
    vestingAmount: ethers.BigNumber.from("300000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("50000"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0xbab5BcA6dD880CB4493cfd1d6c7Ad47443008641",
    vestingAmount: ethers.BigNumber.from("73000000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("12166667"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x52b9F16D4487d64b47c1C1cb3B738C2CA4345Fda",
    vestingAmount: ethers.BigNumber.from("750000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("125000"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0xd644b8508172d9AC5738d7aC1c9B106484e2fE46",
    vestingAmount: ethers.BigNumber.from("37641"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("5228"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0x993B8FB52c3f209AE9270AB6F3fe8c272a10f9CE",
    vestingAmount: ethers.BigNumber.from("536937"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("74575"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0xA3e5189930257A500D5484c50727E56743B11b22",
    vestingAmount: ethers.BigNumber.from("147510"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("22537"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0x3fD14DCfff0ccd2d453BCAdde95c87c736d693Dd",
    vestingAmount: ethers.BigNumber.from("1150578"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("159802"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0xEdbcD3DE49985E5a24b9c20A2b4F3E0CcF92Ff73",
    vestingAmount: ethers.BigNumber.from("191763"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("26634"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0x3361D09D6C03Af4D3661EB898720D0530D71Ba9C",
    vestingAmount: ethers.BigNumber.from("498584"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("69248"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0xB55a3ec27Ee2810752A740E08e8075f673aA4046",
    vestingAmount: ethers.BigNumber.from("52447"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("7285"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0xfEF757281905554E1c64a888BcDD799a5C6D2E4F",
    vestingAmount: ethers.BigNumber.from("1534104"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("234377"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0xf18b4F483832434E76cCBd8920032d145f4613f4",
    vestingAmount: ethers.BigNumber.from("87947"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("13437"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0x41Cb872cB02B01cfD69e7E70Be19caF63dC9Efd6",
    vestingAmount: ethers.BigNumber.from("834376"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("115886"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0x31fC1001E3022Bb8ac595D39d58f4d5A4920bda8",
    vestingAmount: ethers.BigNumber.from("3627999"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("503889"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0x87F44e296Bc178A72709949ac54fcaC479634391",
    vestingAmount: ethers.BigNumber.from("76705"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("10654"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0x34F65d7266893052315d986196f31C78f0030B4d",
    vestingAmount: ethers.BigNumber.from("383526"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("53268"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0xc8a7505Cb83c9EbD8581B968316aC8b8fBB3e1A4",
    vestingAmount: ethers.BigNumber.from("536937"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("74575"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0xAe9Faecf214f54A748174003f7aCA7642A7396cE",
    vestingAmount: ethers.BigNumber.from("30000000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("4583334"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0x36cc79C21687A7Ca5D03EB12830eE08Ef6F1E297",
    vestingAmount: ethers.BigNumber.from("3451735"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("479408"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0x2a955EF2C7ebA68c18925Ac69ECCd1D6a6F38aDD",
    vestingAmount: ethers.BigNumber.from("16108095"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("2237236"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 12960000, // 10 Mar 2022 + 150 days
    exists: true
  },
  {
    beneficiary: "0x93044E5ED197D1ba1E3CBf7Fdf3aA2e460d6e840",
    vestingAmount: ethers.BigNumber.from("20000000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("3055556"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0x34882a99A4c8CB7716eF78B975d8293652F9dA2d",
    vestingAmount: ethers.BigNumber.from("20000000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("3055556"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0xaD630ec2Bdea7D02865645d65D418b1531Fa612f",
    vestingAmount: ethers.BigNumber.from("2500000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("381945"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0x0196B25f7dCfe31DAD0f016357Bd0c7d5ff96b16",
    vestingAmount: ethers.BigNumber.from("875000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("133681"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0x80280FaFf2a4e92FA80F1198854Ca05ccaca28C3",
    vestingAmount: ethers.BigNumber.from("750000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("114584"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0x401982cbe24F6eeEab77C463D5BE0FC4c986bE1b",
    vestingAmount: ethers.BigNumber.from("1250000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("190973"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0x0E704e6c7Adc139915A99AEB45B12E7Fc4c2121C",
    vestingAmount: ethers.BigNumber.from("1250000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("190973"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0x01f776d3D6253Cb5097d651Ab5979De8177280A4",
    vestingAmount: ethers.BigNumber.from("625000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("104167"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 15552000, // 10 Mar 2022 + 180 days
    exists: true
  },
  {
    beneficiary: "0x5dcEd9554C48AF9D83caf219EA61Ac48f0E1b438",
    vestingAmount: ethers.BigNumber.from("10000000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("1527778"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0xCa8DE7c6716DCb65677489a36D424c6611A2ef53",
    vestingAmount: ethers.BigNumber.from("750000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("114584"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  },
  {
    beneficiary: "0x5eAD827A3353c0fc0B6623840e03Fb60c2F33442",
    vestingAmount: ethers.BigNumber.from("750000"),
    duration: "93312000", // 36 months in seconds which is 60*60*24*30*36
    claimedAmount: 0,
    lastClaimedTime: 0,
    initialAmount: ethers.BigNumber.from("114584"),
    initialClaimed: false,
    claimStartTime: 1646870400 + 14256000, // 10 Mar 2022 + 165 days
    exists: true
  }
];
