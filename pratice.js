const targetObj = {
_id: "642193676aea43533b92d4a6",
status: 'ACTIVE',
createdAt: 1679583116,
agentId: '53a64479-b2d0-45f3-ac39-c7608a1217d4',
teamLeadId: '6e0b834e-e90d-43fd-8cb2-5c6c4b043101',
name: 'Imran Hossain',
mobile: '9732994533',
state: 'West Bengal',
city: ' Murshidabad ',
type: 'DEMAND',
__v: 0,
bankDetails: {
  accountHolderName: 'IMRAN HOSSAIN ',
  accountNumber: '920010013134475',
  accountType: 'SAVINGS',
  bankName: 'AXIS BANK',
  ifscCode: 'UTIB0002947',
  updatedTime: 1682324494
},
}


const { agentId, name, bankDetails, salaryDetails } = targetObj

let bankdetailsObj = bankDetails || {}
console.log("000000000000000000000000000000000",bankdetailsObj)
let finalObj = {
    agentId: agentId,
    accountHolderName: bankdetailsObj.accountHolderName || null,
    bankName: bankdetailsObj.bankName || null,
    accountNo: bankdetailsObj.accountNumber || null,
    ifscCode: bankdetailsObj.ifscCode || null
}
console.log("111111111111111111111111111111",finalObj)