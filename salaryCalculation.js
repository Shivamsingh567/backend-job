 const noOfDaysToGive  =  21
 const noOfDaysInMonth = 30
 const salary = 27000
 const targetAmount =  150000
 const targetAmountAchieved =  6694

function CalculateSalary(salary,noOfDays, targetAmount, targetAmountAchieved) {

        console.log("start") 
        let  finalSalary 
        const numberOfDaysCalculated = noOfDays

        const perdaySalary = ( salary/ noOfDaysInMonth)

        if (targetAmountAchieved >= targetAmount) {

            finalSalary = Number(numberOfDaysCalculated * perdaySalary)

        } else {

            const achievedpercentage = Number((targetAmountAchieved * 100) / targetAmount)

            console.log("achievedpercentage",achievedpercentage)

            const overallCalculatedSalary = ((achievedpercentage / 100) * salary)

            console.log("overallCalculatedSalary" , overallCalculatedSalary)

            const perdaySalaryCalculaltion = Number(overallCalculatedSalary / noOfDaysInMonth)

            console.log("perdaySalaryCalculaltion" , perdaySalaryCalculaltion)

            finalSalary = perdaySalaryCalculaltion * numberOfDaysCalculated
        }
        console.log("final >>>>>>>>>>>>>> salary",finalSalary)
}


CalculateSalary(salary,noOfDaysToGive, targetAmount, targetAmountAchieved)