import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyMock {
  async getCompany(companyId: string): Promise<any> {
    // Mock data
    const companies = {
      'company-1': {
        id: 'company-1',
        name: 'Acme Inc.',
        // Add any other company-related data
      },
      'company-2': {
        id: 'company-2',
        name: 'Globex Corp.',
        // Add any other company-related data
      },
    };

    return companies[companyId] || null;
  }
}
