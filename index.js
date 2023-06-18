function calculateNetSalary(basicSalary, benefits) {
  const PAYE_RATES = [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 32333, rate: 0.25 },
    { min: 32334, max: Infinity, rate: 0.3 }
  ];

  const NHIF_RATES = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: Infinity, deduction: 1700 }
  ];

  const NSSF_TIER_I_LIMIT = 6000;
  const NSSF_TIER_I_RATE = 0.06;
  const NSSF_TIER_II_LIMIT = 18000;
  const NSSF_TIER_II_RATE = 0.06;

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate PAYE
  let paye = 0;
  for (const rate of PAYE_RATES) {
    if (grossSalary > rate.min) {
      const taxableAmount = Math.min(grossSalary, rate.max) - rate.min;
      paye += taxableAmount * rate.rate;
    }
  }

  // Calculate NHIF deductions
  let nhifDeductions = 0;
  for (const rate of NHIF_RATES) {
    if (grossSalary >= rate.min && grossSalary <= rate.max) {
      nhifDeductions = rate.deduction;
      break;
    }
  }

  // Calculate NSSF contributions
  let nssfContributions = 0;
  if (grossSalary <= NSSF_TIER_I_LIMIT) {
    nssfContributions = grossSalary * NSSF_TIER_I_RATE;
  } else {
    const tierIRemaining = NSSF_TIER_I_LIMIT * NSSF_TIER_I_RATE;
    nssfContributions =
      tierIRemaining + (grossSalary - NSSF_TIER_I_LIMIT) * NSSF_TIER_II_RATE;
  }

  // Calculate net salary
  const netSalary = grossSalary - paye - nhifDeductions - nssfContributions;

  return {
    grossSalary,
    paye,
    nhifDeductions,
    nssfContributions,
    netSalary
  };
}

// Example usage
const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(salaryDetails);