import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';
import { match } from 'assert';

type Profile = {
  id: string;
  name: string;
  description: string;
};

@Injectable()
export class ProfilesService {
  private profiles: Profile[] = [
    {
      id: randomUUID(),
      name: 'John Doe',
      description: 'Looking for someone to merge whith my heart. ...',
    },
    {
      id: randomUUID(),
      name: 'Jane Smith',
      description: 'Looking for someone to merge whith my heart. ...',
    },
    {
      id: randomUUID(),
      name: 'Alice Johnson',
      description: 'Looking for someone to merge whith my heart. ...',
    },
  ];

  findAll(): Profile[] {
    return this.profiles;
  }

  findOne(id: string): Profile | undefined {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);

    if (!matchingProfile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    return matchingProfile;
  }

  create(createProfileDto: CreateProfileDto) {
    const newProfile: Profile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const matchingProfile = this.profiles.find(
      (existingProfile) => existingProfile.id === id,
    );

    if (!matchingProfile) {
      return {};
    }

    matchingProfile.name = updateProfileDto.name;
    matchingProfile.description = updateProfileDto.description;

    return matchingProfile;
  }

  remove(id: string): void {
    const matchingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    if (matchingProfileIndex === -1) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    this.profiles.splice(matchingProfileIndex, 1);
  }
}
