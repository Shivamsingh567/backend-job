let a = new Date(1675235579990).toLocaleDateString("es-CL")
console.log('00000000000000000000000000',a)
let b = new Date(1675235579990).toString()
var parts = b.split(' ');
console.log('$$$$$$$$$$$$',parts)
var mydate = `${parts[2]} ${parts[1]} ${parts[3]}`
console.log(mydate)
 const date1  =  parseInt(Date.now())
 const date1ToSeconds = parseInt(Date.now() /1000)
 const date2 =  date1ToSeconds

 const date3 = new Date(date2 * 1000).toLocaleDateString("es-CL")
//  const date4 = date3.to
 console.log('11111111111111111111111111111111111',date1)
 console.log('1111111111111222222222222222',date1ToSeconds)
 console.log('22222222222222222222222222222222222',date2)
 let  date = new Date(date2*1000).getDate();
  let month = new Date(date2*1000).getMonth() + 1; // take care of the month's number here ⚠️
  let year = new Date(date2*1000).getFullYear();
  console.log('date',`${date}-${month}-${year}`)
//  console.log('3333333333333333333333333333333',date3)
//  let startime = new Date(1675681281389).toString()
//  let endDate = new Date(1675689057389).toString()
//  console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%',startime)
//  console.log('******************%^%^%^!@#$%^@#$%^&',endDate)
//  var startparts = startime.split(' ');
//  var mystartdate = `${startparts[2]} ${startparts[1]} ${startparts[3]}`
//  var endDateParts = endDate.split(' ');
//  var myenddate = `${endDateParts[2]} ${endDateParts[1]} ${endDateParts[3]}`
//  data.subscriptionDetails.startTime = mystartdate
//  data.subscriptionDetails.endTime = myenddate
        // finalData.subscriptionStatus = "ACTIVE",
        // finalData.subscriptionDetails = {
        //     subscriptionType : "ACCOUNT_MANAGER",
        //     subscriptionPlan: body.subscriptionPlan,
        //     startTime: parseInt(Date.now() / 1000),
        //     endTime :   parseInt(Date.now() /1000 + (subscriptionPlanDuration * 86400)),
        //     subscriptionDescription : subscriptionDescription
        // },


        