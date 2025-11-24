
import { WillData } from '../types';

export const generateWillText = (data: WillData): string => {
  const {
    testatorName,
    testatorCity,
    testatorState,
    executorName,
    executorAddress,
    guardianName,
    beneficiaries,
    witness1Name,
    witness2Name,
    executionDate,
  } = data;

  const beneficiariesText = beneficiaries
    .map((b, index) => {
        if (!b.name || !b.asset) return '';
        return `    ${index + 1}. To my beneficiary, ${b.name}, I give, devise, and bequeath the following asset: ${b.asset}.`;
    })
    .filter(Boolean)
    .join('\n\n');

  const guardianClause = guardianName
    ? `
ARTICLE IV
GUARDIANSHIP

In the event I am the sole surviving parent of minor children, I appoint ${guardianName} as the Guardian of said minor children. If this named Guardian is unable or unwilling to serve, I appoint [Successor Guardian Name] as alternate Guardian.
`
    : '';

  const template = `
LAST WILL AND TESTAMENT
OF
${testatorName.toUpperCase()}

ARTICLE I
DECLARATIONS

I, ${testatorName}, a resident of the City of ${testatorCity}, State of ${testatorState}, being of sound mind and memory, do hereby make, publish, and declare this to be my Last Will and Testament, hereby revoking all former wills and codicils made by me.

ARTICLE II
EXECUTOR

I appoint ${executorName}, residing at ${executorAddress}, as the Executor of this Will. If my Executor is unable or unwilling to serve, I appoint [Successor Executor Name] as my successor Executor. My Executor shall have all the powers allowable to executors under the laws of the State of ${testatorState}.

ARTICLE III
DISPOSITION OF PROPERTY

I direct my Executor to pay my just debts, funeral expenses, and expenses of my last illness from the assets of my estate.

I hereby make the following specific bequests:

${beneficiariesText || '    [No specific bequests listed.]'}
${guardianClause}
ARTICLE V
GENERAL PROVISIONS

This Will has been prepared as a simple will and may not be suitable for complex estates. The provisions of this Will shall be construed in accordance with the laws of the State of ${testatorState}. If any provision of this Will is held to be invalid, such invalidity shall not affect the other provisions which can be given effect without the invalid provision.

IN WITNESS WHEREOF, I, ${testatorName}, the Testator, have hereunto set my hand and seal this ${executionDate || '[Date]'} day of [Month], [Year].


_________________________________________
${testatorName} (Testator)


WITNESS ATTESTATION

On the date written above, the Testator, ${testatorName}, declared to us, the undersigned, that this instrument was their Last Will and Testament and requested us to act as witnesses to it. The Testator then signed this Will in our presence, all of us being present at the same time. We now, at the Testator's request, in the Testator's presence and in the presence of each other, subscribe our names as witnesses.

We declare that we are of sound mind and of proper age to witness a will, and that to the best of our knowledge the Testator is of the age of majority, of sound mind, and under no constraint or undue influence.


Witness 1 Signature: _________________________
Name: ${witness1Name || '[Witness 1 Name]'}


Witness 2 Signature: _________________________
Name: ${witness2Name || '[Witness 2 Name]'}

LEGAL DISCLAIMER: This document is a template and does not constitute legal advice. It is for informational purposes only. You must consult with a qualified attorney in your jurisdiction to ensure this document is legally valid and meets your specific needs.
`;

  return template.trim();
};
