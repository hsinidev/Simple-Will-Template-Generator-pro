// Fix: Define the types for the will data structure.
export interface Beneficiary {
  id: string; // For key in React loops
  name: string;
  asset: string;
}

export interface WillData {
  testatorName: string;
  testatorCity: string;
  testatorState: string;
  executorName: string;
  executorAddress: string;
  guardianName: string;
  beneficiaries: Beneficiary[];
  witness1Name: string;
  witness2Name: string;
  executionDate: string;
}
