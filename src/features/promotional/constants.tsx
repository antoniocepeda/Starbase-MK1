import React from 'react';
import { BuildRobotsContent } from './content/buildRobots';
import { LearnCodeContent } from './content/learnCode';
import { SolveChallengesContent } from './content/solveChallenges';
import { RoverDesignContent } from './content/roverDesign';
import { RobotOlympicsContent } from './content/robotOlympics';
import { SpaceTechContent } from './content/spaceTech';

export const PROMOTIONAL_CONTENT = {
  BUILD_ROBOTS: {
    title: "BUILD SPACE ROBOTS",
    modalContent: BuildRobotsContent
  },
  LEARN_CODE: {
    title: "LEARN TO CODE",
    modalContent: LearnCodeContent
  },
  SOLVE_CHALLENGES: {
    title: "SOLVE CHALLENGES",
    modalContent: SolveChallengesContent
  },
  ROVER_DESIGN: {
    title: "ROVER DESIGN",
    modalContent: RoverDesignContent
  },
  ROBOT_OLYMPICS: {
    title: "ROBOT OLYMPICS",
    modalContent: RobotOlympicsContent
  },
  SPACE_TECH: {
    title: "SPACE TECH",
    modalContent: SpaceTechContent
  }
} as const;