import React from 'react';
import { LevelContent } from '../content';

function Section({
  children,
  level,
}: {
  level: number;
  children: React.ReactNode;
}) {
  return (
    <LevelContent.Provider value={level}>{children}</LevelContent.Provider>
  );
}

export default Section;
