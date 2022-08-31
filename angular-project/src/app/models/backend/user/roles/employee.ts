export interface Employee {
  specialization: Specialization;
  skills: Skills[];
  qualification: Qualification;
  expectedSalary: number;
  experiences: Experience[]
}

interface Specialization {
  id: string;
  name: string;
}

interface Skills {
  id: string;
  name: string;
}

interface Qualification {
  id: string;
  name: string;
}

interface Experience {
  companyName: string;
  period: Period;
}

interface Period {
  from: number;
  to: number;
}
