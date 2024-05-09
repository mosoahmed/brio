import { Injectable } from '@nestjs/common';

@Injectable()
export class UserMock {
  async getUser(userId: string): Promise<any> {
    // Mock data
    const users = {
      'user-1': {
        id: 'user-1',
        name: 'John Doe',
        companyId: 'company-1',
        // Add any other user-related data
      },
      'user-2': {
        id: 'user-2',
        name: 'Jane Smith',
        companyId: 'company-2',
        // Add any other user-related data
      },
    };

    return users[userId] || null;
  }
}
