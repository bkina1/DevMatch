import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID,
      name: 'John Doe',
      description:
        'Looking for someone to merge whith my heart. I am a fullstack romantic who refactor my feelings until they pass all tests. Bonus points if you can debug my issues while we pair my program over coffee. Let s commit to something beautifull together.',
    },
    {
      id: randomUUID,
      name: 'Jane Smith',
      description:
        'Looking for someone to merge whith my heart. I am a fullstack romantic who refactor my feelings until they pass all tests. Bonus points if you can debug my issues while we pair my program over coffee. Let s commit to something beautifull together.',
    },
    {
      id: randomUUID,
      name: 'Alice Johnson',
      description:
        'Looking for someone to merge whith my heart. I am a fullstack romantic who refactor my feelings until they pass all tests. Bonus points if you can debug my issues while we pair my program over coffee. Let s commit to something beautifull together.',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }
}
